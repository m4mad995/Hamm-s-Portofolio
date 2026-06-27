export default async function handler(req, res) {
  try {
    const token = process.env.NOTION_TOKEN;
    const databaseId = process.env.NOTION_DATABASE_ID;

    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data dari Notion");
    }

    // 🧹 PROSES NORMALISASI DATA (SUDAH DISESUAIKAN DENGAN SCREENSHOT DB)
    const cleanProjects = data.results.map((item) => {
      const props = item.properties;
      return {
        id: item.id,
        title: props.Title?.title?.[0]?.plain_text || "Proyek Tanpa Judul",
        description: props.Description?.rich_text?.[0]?.plain_text || "",
        projectType: props['Project Type']?.select?.name || "",
        filterGroup: props['Filter Group']?.multi_select?.map(c => c.name) || [], // Menggunakan 'Filter Group'
        projectTag: props['Project Tag']?.rich_text?.[0]?.plain_text || "",
        capsuleText: props['Capsule Text']?.select?.name || props['Capsule Text']?.rich_text?.[0]?.plain_text || "", // Menggunakan 'Capsule Text'
        status: props.Status?.status?.name || props.Status?.select?.name || "",
        techStack: props['Tech Stack']?.multi_select?.map(t => t.name) || [],
        imageLink: props['Image Link']?.url || "",
        repoLink: props['Repo Link']?.url || "",
        designLink: props['Design Link']?.url || "",
        liveLink: props['Live Link']?.url || ""
      };
    });

    return res.status(200).json(cleanProjects);
    
  } catch (error) {
    console.error("🚨 ERROR BACKEND:", error.message);
    return res.status(500).json({ error: error.message });
  }
}