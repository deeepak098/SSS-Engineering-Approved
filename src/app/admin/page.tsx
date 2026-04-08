
"use client"

import { useState, useEffect } from 'react';
import { useContent } from '@/context/ContentContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Save, ArrowLeft, LayoutDashboard, Package, ImageIcon, BarChart3, Ship, Settings } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const { content, updateContent } = useContent();
  const { toast } = useToast();
  const [formData, setFormData] = useState(content);

  useEffect(() => {
    setFormData(content);
  }, [content]);

  const handleSave = () => {
    updateContent(formData);
    toast({
      title: "Settings Saved",
      description: "Website content and technical specifications have been successfully updated.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f5f5]">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <h1 className="font-headline font-extrabold text-3xl text-foreground flex items-center gap-2">
                <LayoutDashboard className="h-8 w-8 text-primary" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground font-body">Manage site content, machinery specs, and global logistics features.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild className="font-headline font-bold">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> View Site
                </Link>
              </Button>
              <Button onClick={handleSave} className="font-headline font-bold flex items-center gap-2 bg-primary hover:bg-primary/90">
                <Save className="h-4 w-4" /> Save All Changes
              </Button>
            </div>
          </div>

          <Tabs defaultValue="products" className="space-y-6">
            <TabsList className="bg-white border w-full justify-start h-auto p-1 flex-wrap overflow-x-auto">
              <TabsTrigger value="hero" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5 font-headline text-xs font-bold uppercase tracking-wider">
                <ImageIcon className="h-4 w-4 mr-2" /> Hero
              </TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5 font-headline text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="h-4 w-4 mr-2" /> Stats
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5 font-headline text-xs font-bold uppercase tracking-wider">
                <Package className="h-4 w-4 mr-2" /> Products
              </TabsTrigger>
              <TabsTrigger value="logistics" className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2.5 font-headline text-xs font-bold uppercase tracking-wider">
                <Ship className="h-4 w-4 mr-2" /> Logistics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hero">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-none shadow-sm rounded-none">
                  <CardHeader className="border-b">
                    <CardTitle className="font-headline font-bold text-lg uppercase tracking-tight">Hero Configuration</CardTitle>
                    <CardDescription className="font-body">Update the main headline and call to action.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-2">
                      <label className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground">Main Title</label>
                      <Input 
                        className="rounded-none border-border"
                        value={formData.hero.title} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          hero: { ...formData.hero, title: e.target.value }
                        })} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground">Description Text</label>
                      <Textarea 
                        className="rounded-none border-border"
                        rows={4}
                        value={formData.hero.description} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          hero: { ...formData.hero, description: e.target.value }
                        })} 
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm rounded-none">
                  <CardHeader className="border-b">
                    <CardTitle className="font-headline font-bold text-lg uppercase tracking-tight">Image Assets</CardTitle>
                    <CardDescription className="font-body">Manage high-resolution industrial backgrounds.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-2">
                      <label className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <ImageIcon className="h-3 w-3" /> Hero Image URL
                      </label>
                      <Input 
                        className="rounded-none border-border"
                        value={formData.hero.imageUrl} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          hero: { ...formData.hero, imageUrl: e.target.value }
                        })} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-headline font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <ImageIcon className="h-3 w-3" /> About Page Image URL
                      </label>
                      <Input 
                        className="rounded-none border-border"
                        value={formData.about.imageUrl} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          about: { ...formData.about, imageUrl: e.target.value }
                        })} 
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <Card className="border-none shadow-sm rounded-none">
                <CardHeader className="border-b">
                  <CardTitle className="font-headline font-bold text-lg uppercase tracking-tight">Corporate Performance Stats</CardTitle>
                  <CardDescription className="font-body">Edit the four key performance indicators shown below the hero section.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {formData.stats.map((stat, idx) => (
                      <div key={idx} className="p-5 border rounded-none space-y-4 bg-muted/20">
                        <div className="space-y-2">
                          <label className="text-[10px] font-headline font-bold text-muted-foreground uppercase tracking-widest">Value (e.g. 15+)</label>
                          <Input 
                            className="rounded-none font-bold"
                            value={stat.value} 
                            onChange={(e) => {
                              const newStats = [...formData.stats];
                              newStats[idx].value = e.target.value;
                              setFormData({ ...formData, stats: newStats });
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-headline font-bold text-muted-foreground uppercase tracking-widest">Label</label>
                          <Input 
                            className="rounded-none"
                            value={stat.label} 
                            onChange={(e) => {
                              const newStats = [...formData.stats];
                              newStats[idx].label = e.target.value;
                              setFormData({ ...formData, stats: newStats });
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products">
              <Card className="border-none shadow-sm rounded-none">
                <CardHeader className="border-b">
                  <CardTitle className="font-headline font-bold text-lg uppercase tracking-tight">Machinery & Product Management</CardTitle>
                  <CardDescription className="font-body">Configure technical specifications and media for industrial products.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 gap-6">
                    {formData.products.map((p, idx) => (
                      <div key={p.id} className="p-6 border rounded-none bg-muted/10 space-y-6">
                        <div className="flex items-center justify-between border-b pb-4">
                          <h4 className="font-headline font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                            <Package className="h-4 w-4" /> Product Config #{idx + 1}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Product Title</label>
                            <Input 
                              className="rounded-none"
                              value={p.title} 
                              onChange={(e) => {
                                const newProducts = [...formData.products];
                                newProducts[idx].title = e.target.value;
                                setFormData({ ...formData, products: newProducts });
                              }} 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Product Image URL</label>
                            <Input 
                              className="rounded-none"
                              value={p.imageUrl} 
                              onChange={(e) => {
                                const newProducts = [...formData.products];
                                newProducts[idx].imageUrl = e.target.value;
                                setFormData({ ...formData, products: newProducts });
                              }} 
                            />
                          </div>
                          <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Technical Description</label>
                            <Textarea 
                              className="rounded-none"
                              value={p.description} 
                              onChange={(e) => {
                                const newProducts = [...formData.products];
                                newProducts[idx].description = e.target.value;
                                setFormData({ ...formData, products: newProducts });
                              }} 
                            />
                          </div>
                          
                          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/60">
                            <div className="space-y-2">
                              <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Capacity Specification</label>
                              <Input 
                                className="rounded-none border-primary/20"
                                value={p.specs?.capacity || ''} 
                                placeholder="e.g. 3000-5000 trays/hr"
                                onChange={(e) => {
                                  const newProducts = [...formData.products];
                                  newProducts[idx].specs = { ...newProducts[idx].specs, capacity: e.target.value };
                                  setFormData({ ...formData, products: newProducts });
                                }} 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Power Consumption</label>
                              <Input 
                                className="rounded-none border-primary/20"
                                value={p.specs?.power || ''} 
                                placeholder="e.g. 45-90 kW"
                                onChange={(e) => {
                                  const newProducts = [...formData.products];
                                  newProducts[idx].specs = { ...newProducts[idx].specs, power: e.target.value };
                                  setFormData({ ...formData, products: newProducts });
                                }} 
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Mold Configuration</label>
                              <Input 
                                className="rounded-none border-primary/20"
                                value={p.specs?.molds || ''} 
                                placeholder="e.g. 8-side rotary"
                                onChange={(e) => {
                                  const newProducts = [...formData.products];
                                  newProducts[idx].specs = { ...newProducts[idx].specs, molds: e.target.value };
                                  setFormData({ ...formData, products: newProducts });
                                }} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logistics">
              <Card className="border-none shadow-sm rounded-none">
                <CardHeader className="border-b">
                  <CardTitle className="font-headline font-bold text-lg uppercase tracking-tight">Global Export & Logistics</CardTitle>
                  <CardDescription className="font-body">Manage the international trade banner and optimized feature cards.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Section Heading</label>
                      <Input 
                        className="rounded-none"
                        value={formData.logistics.title} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          logistics: { ...formData.logistics, title: e.target.value }
                        })} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Main Banner Image URL</label>
                      <Input 
                        className="rounded-none"
                        value={formData.logistics.imageUrl} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          logistics: { ...formData.logistics, imageUrl: e.target.value }
                        })} 
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-headline font-bold text-muted-foreground uppercase tracking-widest">Section Overview Text</label>
                      <Textarea 
                        className="rounded-none"
                        value={formData.logistics.description} 
                        onChange={(e) => setFormData({
                          ...formData, 
                          logistics: { ...formData.logistics, description: e.target.value }
                        })} 
                      />
                    </div>
                  </div>

                  <div className="pt-8 border-t space-y-6">
                    <h3 className="font-headline font-bold text-lg uppercase tracking-tight flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" /> Feature Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {formData.logistics.features.map((feature, idx) => (
                        <div key={idx} className="p-5 border rounded-none bg-muted/20 space-y-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-headline font-bold text-muted-foreground uppercase tracking-widest">Feature Title</label>
                            <Input 
                              className="rounded-none font-bold"
                              value={feature.title} 
                              onChange={(e) => {
                                const newFeatures = [...formData.logistics.features];
                                newFeatures[idx].title = e.target.value;
                                setFormData({
                                  ...formData,
                                  logistics: { ...formData.logistics, features: newFeatures }
                                });
                              }}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-headline font-bold text-muted-foreground uppercase tracking-widest">Description</label>
                            <Textarea 
                              className="rounded-none text-sm"
                              rows={3}
                              value={feature.description} 
                              onChange={(e) => {
                                const newFeatures = [...formData.logistics.features];
                                newFeatures[idx].description = e.target.value;
                                setFormData({
                                  ...formData,
                                  logistics: { ...formData.logistics, features: newFeatures }
                                });
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
