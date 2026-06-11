import { getCollection, type CollectionEntry } from 'astro:content';

export type Doc = CollectionEntry<'docs'>;
export type DocGroupKey = Doc['data']['group'];

export type DocGroupDef = {
  key: DocGroupKey;
  /** 側欄群組標題；null 表示該群組不顯示標題 */
  sidebarLabel: string | null;
  /** 首頁目錄卡片標題 */
  label: string;
};

/** 群組的顯示順序與標題；文件歸屬與排序由各 md 的 frontmatter（group / order）決定 */
export const docGroups: DocGroupDef[] = [
  { key: 'general', sidebarLabel: null, label: '基礎' },
  { key: 'printer', sidebarLabel: '印表機', label: '印表機' },
  { key: 'repair', sidebarLabel: '維修常見狀況', label: '維修常見狀況' },
  { key: 'copy', sidebarLabel: '對拷', label: '對拷' },
  { key: 'other', sidebarLabel: null, label: '其他' },
];

export type NavGroup = DocGroupDef & { docs: Doc[] };

export async function getNavGroups(): Promise<NavGroup[]> {
  const docs = await getCollection('docs');

  const groups = docGroups.map((def) => ({
    ...def,
    docs: docs
      .filter((doc) => doc.data.group === def.key)
      .sort((a, b) => a.data.order - b.data.order),
  }));

  const placedCount = groups.reduce((sum, g) => sum + g.docs.length, 0);
  if (placedCount !== docs.length) {
    const knownKeys = new Set(docGroups.map((g) => g.key));
    const orphans = docs
      .filter((doc) => !knownKeys.has(doc.data.group))
      .map((doc) => doc.id);
    throw new Error(
      `nav: 有文件的 group 不在 docGroups 定義中，將無法被導覽到：${orphans.join(', ')}`,
    );
  }

  return groups;
}
