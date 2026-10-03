import { ProjectHero } from '@/app/components/ProjectHero';
import { ProjectOverview } from '@/app/components/ProjectOverview';
import { ImageShowcase } from '@/app/components/ImageShowcase';
import { ColorPalette } from '@/app/components/ColorPalette';
import { TypographyShowcase } from '@/app/components/TypographyShowcase';
import { BeforeAfter } from '@/app/components/BeforeAfter';
import { BrandApplications } from '@/app/components/BrandApplications';
import { ClientTestimonial } from '@/app/components/ClientTestimonial';
import { ProcessTimeline } from '@/app/components/ProcessTimeline';
import { Deliverables } from '@/app/components/Deliverables';
import { NextProject } from '@/app/components/NextProject';
import { BookingSection } from '@/app/components/BookingSection';

interface ProjectDetailProps {
  isDark: boolean;
}

export default function ProjectDetail({ isDark }: ProjectDetailProps) {
  return (
    <>
      <ProjectHero isDark={isDark} />
      <ProjectOverview isDark={isDark} />
      <ImageShowcase isDark={isDark} images={[]} />
      <BeforeAfter isDark={isDark} />
      <ColorPalette isDark={isDark} />
      <TypographyShowcase isDark={isDark} />
      <BrandApplications isDark={isDark} />
      <ClientTestimonial isDark={isDark} />
      <ProcessTimeline isDark={isDark} />
      <Deliverables isDark={isDark} />
      <BookingSection isDark={isDark} />
      <NextProject isDark={isDark} />
    </>
  );
}