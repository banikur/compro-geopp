import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Proyek',
      slugField: 'name',
      path: 'content/projects/*',
      schema: {
        name: fields.slug({ name: { label: 'Nama Proyek' } }),
        location: fields.text({ label: 'Lokasi' }),
        type: fields.select({
          label: 'Tipe',
          options: [
            { label: 'Penambahan Hujan', value: 'Penambahan Hujan' },
            { label: 'Pengurangan Hujan', value: 'Pengurangan Hujan' },
          ],
          defaultValue: 'Penambahan Hujan',
        }),
        result: fields.text({ label: 'Hasil' }),
        year: fields.text({ label: 'Tahun' }),
        sector: fields.text({ label: 'Sektor' }),
        image: fields.text({ label: 'Path Gambar (e.g. /images/projects/project-dam.webp)' }),
        description: fields.text({ label: 'Deskripsi (opsional)', multiline: true }),
      },
    }),
    articles: collection({
      label: 'Artikel',
      slugField: 'slug',
      path: 'content/articles/*',
      format: { contentField: 'content' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug' } }),
        tag: fields.text({ label: 'Tag' }),
        title: fields.text({ label: 'Judul' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        date: fields.text({ label: 'Tanggal (e.g. 12 Juni 2025)' }),
        readTime: fields.text({ label: 'Waktu Baca (e.g. 6 menit)' }),
        image: fields.text({ label: 'Path Gambar' }),
        featured: fields.checkbox({ label: 'Featured' }),
        author: fields.text({ label: 'Penulis' }),
        content: fields.document({
          label: 'Konten Lengkap',
          formatting: true,
          dividers: true,
          links: true,
        }),
      },
    }),
    clients: collection({
      label: 'Klien',
      slugField: 'name',
      path: 'content/clients/*',
      schema: {
        name: fields.slug({ name: { label: 'Nama Klien' } }),
        sector: fields.text({ label: 'Sektor' }),
        logo: fields.text({ label: 'Path Logo (opsional)' }),
      },
    }),
    services: collection({
      label: 'Layanan',
      slugField: 'slug',
      path: 'content/services/*',
      schema: {
        slug: fields.slug({ name: { label: 'Slug' } }),
        icon: fields.text({ label: 'Icon Name (lucide-react)' }),
        title: fields.text({ label: 'Judul' }),
        sub: fields.text({ label: 'Sub Judul' }),
        desc: fields.text({ label: 'Deskripsi', multiline: true }),
        items: fields.text({ label: 'Items (pisah koma)', multiline: true }),
        href: fields.text({ label: 'Link' }),
      },
    }),
  },
});
