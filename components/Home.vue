<template>
  <ProfileHeader />
  <AboutSection />
  <ProjectsSection />
  <TechnologiesSection />
  <ExperienceSection />
  <EducationSection />
  <HobbiesSection />
  <FooterSection />
</template>

<script>
import Theme from "./Theme.vue";
import ProfileHeader from "./ProfileHeader.vue";
import AboutSection from "./AboutSection.vue";
import TechnologiesSection from "./TechnologiesSection.vue";
import ExperienceSection from "./ExperienceSection.vue";
import ProjectsSection from "./ProjectsSection.vue";
import FooterSection from "./FooterSection.vue";
import EducationSection from "./EducationSection.vue";
import HobbiesSection from "./HobbiesSection.vue";

export default {
  name: "Home",
  components: {
    Theme,
    ProfileHeader,
    AboutSection,
    TechnologiesSection,
    ExperienceSection,
    EducationSection,
    ProjectsSection,
    FooterSection,
    HobbiesSection,
  },
};
</script>

<style scoped>
/* Add necessary styles here */
</style>