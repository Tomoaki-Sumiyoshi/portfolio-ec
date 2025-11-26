'use client';
export default function Error({ error }: { error: Error }) {
  return <main style={{ padding: 24 }}>エラー： {error.message}</main>;
}
