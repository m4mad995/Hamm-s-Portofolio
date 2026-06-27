export default async function handler(req, res) {
  try {
    const token = process.env.NOTION_TOKEN;
    // Menggunakan ID database sertifikat yang baru kita set di .env
    const databaseId = process.env.NOTION_CERTIFICATES_DATABASE_ID; 

    // Query ke Notion API dengan menyertakan pengurutan (sorting) berdasarkan kolom 'Order'
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sorts: [
          {
            property: 'Order',
            direction: 'ascending', // Urutkan dari angka terkecil (1, 2, 3...)
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Gagal mengambil data sertifikat dari Notion");
    }

    // 🧹 PROSES NORMALISASI DATA SERTIFIKAT
    const cleanCertifications = data.results.map((item) => {
      const props = item.properties;
      return {
        id: item.id,
        title: props.Title?.title?.[0]?.plain_text || "Sertifikat Tanpa Judul",
        subHeading: props['Sub Heading']?.rich_text?.[0]?.plain_text || "",
        imageLink: props['Image Link']?.url || "",
        credentialLink: props['Credential Link']?.url || "#"
      };
    });

    return res.status(200).json(cleanCertifications);
    
  } catch (error) {
    console.error("🚨 ERROR BACKEND CERTIFICATIONS:", error.message);
    return res.status(500).json({ error: error.message });
  }
}