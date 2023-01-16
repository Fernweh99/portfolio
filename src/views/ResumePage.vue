<template>
  <div id="resume">
    <div class="container">
      <h1 class="display-1">Resume</h1>
      <div class="row">
        <!-- Education -->
        <div class="col-12 col-md-5 mb-5">
          <h2 class="display-5 mb-4">Education</h2>
          <TemporalCard v-for="education in educationDates" :key="education.id" :item="education" :last="educationDates.length == education.id"/>
        </div>
        <!-- Experience -->
        <div class="col-12 col-md-6 offset-md-1 mb-5">
          <h2 class="display-5 mb-4">Experience</h2>
          <TemporalCard v-for="experience in experienceDates" :key="experience.id" :item="experience" :last="experienceDates.length == experience.id"/>
        </div>
        <!-- Competence Skills -->
        <div class="col-12 mb-5 text-center">
          <h2 class="display-4 mb-4">Skills</h2>
          <div class="row">
            <!-- Languages skills -->
            <div class="col-12 col-md-6 col-lg-4 my-3">
              <div class="row">
                <ValueSkills class v-for="skill in skillsDates[0]" :key="skill.label" :label="skill.label" :vote="skill.vote"/>
              </div>
            </div>
            <!-- Library & Framework skills -->
            <div class="col-12 col-md-6 col-lg-4 my-3">
              <div class="row">
                <ValueSkills class v-for="skill in skillsDates[1]" :key="skill.label" :label="skill.label" :vote="skill.vote"/>
              </div>
            </div>
            <!-- Other Skills -->
            <div class="col-12 col-md-6 col-lg-4 my-3">
              <div class="row">
                <ValueSkills class v-for="skill in skillsDates[2]" :key="skill.label" :label="skill.label" :vote="skill.vote"/>
              </div>
            </div>
          </div>
        </div>
        <!-- Soft Skills -->
        <div class="col-12">
          <h2 class="display-4 mb-4 text-center">Soft Skills</h2>
          <div class="d-flex px-5 justify-content-center flex-wrap">
            <div v-for="softSkill in softSkillsDates" :key="softSkill.label" class="circle-skill">
              <div>
                <i :class="softSkill.icon + ' fa-3x'"></i>
                <p class="mt-2">{{softSkill.label}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Interest -->
        <div class="col-12">
          <h2 class="display-4 my-4 text-center">Hobbies & Interests</h2>
          <div class="d-flex px-5 justify-content-center flex-wrap">
            <div v-for="hobbie in hobbiesDates" :key="hobbie.label" class="circle-skill">
              <div>
                <i :class="hobbie.icon + ' fa-3x'"></i>
                <p class="mt-2">{{hobbie.label}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </template>
 
 <script>
import TemporalCard from '@/components/TemporalCard.vue';
import ValueSkills from '@/components/ValueSkills.vue';
import {educationDates, experienceDates, skillsDates, softSkillsDates, hobbiesDates} from '@/assets/data/index.js';
 export default {
  name: "ResumePage",
  components: { TemporalCard, ValueSkills },
  data() {
    return {
      educationDates,
      experienceDates,
      skillsDates,
      softSkillsDates,
      hobbiesDates,
    }
  },
}
 </script>
 
 <style lang="scss" scoped>
  #resume {
    overflow-x: hidden; ;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    .container {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    h1, h2 {
      font-weight: 600;
    }.circle-skill {
      margin: 10px 10px;
      text-align: center;
      height: 150px;
      width: 150px;
      border: 2px solid goldenrod;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
 </style>