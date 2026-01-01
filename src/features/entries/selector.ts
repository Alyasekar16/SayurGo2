import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Select entries safely — `entries` may be a fallback reducer with `list: []`.
export const selectEntries = (s: RootState) => (s.entries && Array.isArray((s.entries as any).list) ? (s.entries as any).list : []);

export const makeSelectById = (id: string) =>
  createSelector(selectEntries, list => list.find((e: any) => e.id === id));

// Filter over product-like fields: `nama`, `jenis`, `harga` (fallback to string checks).
export const makeSelectFiltered = (q: string) =>
  createSelector(selectEntries, list => {
    const s = q.trim().toLowerCase();
    if (!s) return list;
    return list.filter((e: any) => {
      const name = (e.nama || '').toString().toLowerCase();
      const jenis = (e.jenis || '').toString().toLowerCase();
      const harga = (e.harga || '').toString().toLowerCase();
      return name.includes(s) || jenis.includes(s) || harga.includes(s);
    });
  });