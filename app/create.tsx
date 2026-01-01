import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { addEntry } from '../src/features/entries';
import { useAppDispatch } from '../src/store/hooks';

export default function CreateEntryScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2025-10-06');
  const [preview, setPrev] = useState('');
  const [moodUri, setMood] = useState('https://picsum.photos/seed/new/300');

  const canSave = title.trim().length >= 3 && preview.trim().length >= 5;

  const save = () => {
    if (!canSave) return;
    dispatch(addEntry({ title: title.trim(), date: date.trim(), preview: preview.trim(), moodUri }));
    router.back();
  };

  return (
    <View style={{ flex:1, padding:16, gap:12 }}>
      <Text style={{ fontWeight:'700' }}>Tambah Entri</Text>
      <TextInput placeholder="Judul" value={title} onChangeText={setTitle} style={{ borderWidth:1, borderRadius:12, padding:10 }} />
      <TextInput placeholder="YYYY-MM-DD" value={date} onChangeText={setDate} style={{ borderWidth:1, borderRadius:12, padding:10 }} />
      <TextInput placeholder="Ringkasan..." value={preview} onChangeText={setPrev} multiline style={{ borderWidth:1, borderRadius:12, padding:10, height:90 }} />
      <TextInput placeholder="Mood image URL" value={moodUri} onChangeText={setMood} style={{ borderWidth:1, borderRadius:12, padding:10 }} />
      <Pressable onPress={save} disabled={!canSave} style={{ backgroundColor:'#2563EB', padding:12, borderRadius:12, opacity: canSave?1:0.5 }}>
        <Text style={{ color:'#fff', textAlign:'center', fontWeight:'700' }}>Simpan</Text>
      </Pressable>
    </View>
  );
}
