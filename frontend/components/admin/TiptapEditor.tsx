"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { Bold, Italic, Heading2, List, ListOrdered, Quote, Image as ImageIcon, Table as TableIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt('Enter Image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  return (
    <div className="border-b border-border p-2 flex flex-wrap gap-1 bg-muted/20">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-muted' : ''}
        aria-label="Bold"
      >
        <Bold className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-muted' : ''}
        aria-label="Italic"
      >
        <Italic className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'bg-muted' : ''}
        aria-label="Heading 2"
      >
        <Heading2 className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-muted' : ''}
        aria-label="Bullet List"
      >
        <List className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-muted' : ''}
        aria-label="Ordered List"
      >
        <ListOrdered className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-muted' : ''}
        aria-label="Blockquote"
      >
        <Quote className="w-4 h-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-2 self-center"></div>

      <Button variant="ghost" size="sm" onClick={addImage} aria-label="Insert Image">
        <ImageIcon className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={addTable} aria-label="Insert Table">
        <TableIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: '<p>Start writing your amazing blog post here...</p>',
    editorProps: {
      attributes: {
        className: 'prose prose-sm sm:prose-base max-w-none focus:outline-none p-6 min-h-[500px]',
      },
    },
  });

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-white shadow-sm">
      <MenuBar editor={editor} />
      <div className="bg-white [&_.tiptap_table]:border-collapse [&_.tiptap_table]:table-auto [&_.tiptap_table]:w-full [&_.tiptap_td]:border [&_.tiptap_td]:border-border [&_.tiptap_td]:p-2 [&_.tiptap_th]:border [&_.tiptap_th]:border-border [&_.tiptap_th]:bg-muted [&_.tiptap_th]:p-2 [&_.tiptap_th]:font-bold [&_.tiptap_img]:max-w-full [&_.tiptap_img]:h-auto [&_.tiptap_img]:rounded-md">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
