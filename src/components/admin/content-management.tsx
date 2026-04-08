"use client"

import { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Settings2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function AdminContentManagement() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [formData, setFormData] = useState(content);

  const handleSave = () => {
    updateContent(formData);
    toast({
      title: "Content Updated",
      description: "Website content has been successfully updated.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Settings2 className="h-4 w-4" />
          <span>Edit Website Content</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Admin Content Management</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8 py-4">
          {/* Hero Section */}
          <section className="space-y-4 border-b pb-6">
            <h3 className="font-headline font-bold text-lg text-primary">Homepage Hero Section</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Hero Title</label>
              <Input 
                value={formData.hero.title} 
                onChange={(e) => setFormData({
                  ...formData, 
                  hero: { ...formData.hero, title: e.target.value }
                })} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Hero Description</label>
              <Textarea 
                value={formData.hero.description} 
                onChange={(e) => setFormData({
                  ...formData, 
                  hero: { ...formData.hero, description: e.target.value }
                })} 
              />
            </div>
          </section>

          {/* Product Grid Titles */}
          <section className="space-y-4 border-b pb-6">
            <h3 className="font-headline font-bold text-lg text-primary">Products Management</h3>
            {formData.products.map((p, idx) => (
              <div key={p.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded-lg bg-muted/50">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">Product Card {idx + 1} Title</label>
                  <Input 
                    value={p.title} 
                    onChange={(e) => {
                      const newProducts = [...formData.products];
                      newProducts[idx].title = e.target.value;
                      setFormData({ ...formData, products: newProducts });
                    }} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">Description</label>
                  <Input 
                    value={p.description} 
                    onChange={(e) => {
                      const newProducts = [...formData.products];
                      newProducts[idx].description = e.target.value;
                      setFormData({ ...formData, products: newProducts });
                    }} 
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Blogs Management */}
          <section className="space-y-4 border-b pb-6">
            <h3 className="font-headline font-bold text-lg text-primary">Blogs Management</h3>
            {formData.blogs.map((b, idx) => (
              <div key={b.id} className="space-y-4 border p-4 rounded-lg bg-muted/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase">Blog {idx + 1} Title</label>
                    <Input 
                      value={b.title} 
                      onChange={(e) => {
                        const newBlogs = [...formData.blogs];
                        newBlogs[idx].title = e.target.value;
                        setFormData({ ...formData, blogs: newBlogs });
                      }} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase">Category</label>
                    <Input 
                      value={b.category} 
                      onChange={(e) => {
                        const newBlogs = [...formData.blogs];
                        newBlogs[idx].category = e.target.value;
                        setFormData({ ...formData, blogs: newBlogs });
                      }} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">Excerpt</label>
                  <Textarea 
                    value={b.excerpt} 
                    onChange={(e) => {
                      const newBlogs = [...formData.blogs];
                      newBlogs[idx].excerpt = e.target.value;
                      setFormData({ ...formData, blogs: newBlogs });
                    }} 
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Sustainability */}
          <section className="space-y-4">
            <h3 className="font-headline font-bold text-lg text-primary">Sustainability Commitment</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input 
                value={formData.sustainability.title} 
                onChange={(e) => setFormData({
                  ...formData, 
                  sustainability: { ...formData.sustainability, title: e.target.value }
                })} 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Content Body</label>
              <Textarea 
                value={formData.sustainability.description} 
                onChange={(e) => setFormData({
                  ...formData, 
                  sustainability: { ...formData.sustainability, description: e.target.value }
                })} 
              />
            </div>
          </section>
        </div>

        <DialogFooter>
          <Button onClick={handleSave} className="font-headline font-bold">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
