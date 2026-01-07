'use client'

import { Award, Download, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock data - À remplacer par les données réelles de la BDD
const mockCertificats = [
  {
    id: '1',
    title: 'Attestation de formation - VAE DEAES',
    formation: 'VAE Auxiliaire de Vie (DEAES)',
    issuedAt: new Date('2025-12-15'),
    type: 'attestation',
    downloadUrl: '/api/certificats/1/download',
  },
]

const mockPendingCertificats = [
  {
    id: '2',
    title: 'Attestation de formation - VAE DEAS',
    formation: 'VAE Aide-Soignant (DEAS)',
    progress: 50,
    estimatedDate: new Date('2026-03-01'),
  },
]

export default function CertificatsPage() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

  const hasCertificats = mockCertificats.length > 0
  const hasPending = mockPendingCertificats.length > 0

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Mes Certificats</h1>
        <p className="text-muted-foreground mt-1">
          Retrouvez ici toutes vos attestations de formation
        </p>
      </div>

      {/* Certificats obtenus */}
      {hasCertificats && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Certificats obtenus
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockCertificats.map((cert) => (
              <Card key={cert.id} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{cert.formation}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Délivré le {formatDate(cert.issuedAt)}</span>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                  <Button variant="outline" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Certificats en attente */}
      {hasPending && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">En cours d'obtention</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockPendingCertificats.map((cert) => (
              <Card key={cert.id} className="border-dashed">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                      <Award className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base">{cert.title}</CardTitle>
                        <Badge variant="secondary">{cert.progress}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{cert.formation}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Date estimée : {formatDate(cert.estimatedDate)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" disabled>
                    Formation en cours...
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* État vide */}
      {!hasCertificats && !hasPending && (
        <Card className="text-center py-12">
          <CardContent>
            <Award className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h2 className="text-lg font-semibold mt-4">Aucun certificat</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Les certificats seront disponibles ici une fois vos formations terminées.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Information */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Comment obtenir mon certificat ?</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>1. Complétez 100% de votre formation</li>
            <li>2. Votre attestation sera générée automatiquement</li>
            <li>3. Téléchargez-la au format PDF</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
