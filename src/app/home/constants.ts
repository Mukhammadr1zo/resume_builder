import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "John Doe",
    summary:
      "Marketing bo'limida Bosh Mutaxasis",
    email: "marketing@tstu.uz",
    phone: "123-456-7890",
    location: "Toshkent, UZB",
    url: "linkedin.com/in/",
  },
  workExperiences: [
    {
      company: "ABC Company",
      jobTitle: "Bosh Mutaxasis",
      date: "Noyabr 2023 - Hozirgacha",
      descriptions: [
        "Minglab kunlik faol foydalanuvchilarga butun platforma bo'ylab kontentni qidirish imkonini beruvchi qidiruv panelini ishlab chiqishda 5 muhandisdan iborat o'zaro faoliyat guruhini boshqaring.",
        "Ro'yxatdan o'tish tezligini 20% ga oshiradigan ajoyib bosh sahifa mahsulot demo animatsiyalarini yarating",
      ],
    },
    {
      company: "Najot Ta'lim",
      jobTitle: "Assistent O'qituvchi",
      date: "Avgust 2022 - Fevral 2023",
      descriptions: [
        "Mavjud kontent muharriri mobil javob berish uchun qayta arxitektoriya qilindi, bu esa mobil foydalanuvchilarning faolligini 10% ga oshirishga olib keldi.",
        "Foydalanuvchilar saqlanish darajasini 15% ga oshirgan taraqqiyotni kuzatishga yordam berish uchun taraqqiyot paneli yaratildi.",
      ],
    },
    {
      company: "Toshkent Davlat Transport Universiteti",
      jobTitle: "Bosh Mutaxasis",
      date: "Noyabr 2023",
      descriptions: [
        "Iqtidorli talaba",
        "Tadqiqot natijalarini 20 dan ortiq professor-o‘qituvchilar va talabalarga taqdim etdi",
      ],
    },
  ],
  educations: [
    {
      school: "Toshkent Davlat Transport Universiteti",
      degree: "Raqamli Iqtisodiyot",
      date: "Sentyabr 2021 - Iyun 2025",
      gpa: "3.8",
      descriptions: [
        "Won 1st place in 2022 Education Hackathon, 2nd place in 2023 Health Tech Competition",
        "Teaching Assistant for Programming for the Web (2022 - 2023)",
      ],
    },
  ],
  projects: [
    {
      project: "Rezyume",
      date: "Noyabr 2023",
      descriptions: [
        "Minglab foydalanuvchilarga osonlikcha professional rezyume yaratish va orzu qilgan ishlarini topish imkonini beruvchi bepul rezyume yaratuvchi veb-ilovasi yaratildi va ishga tushirildi.",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "Ingliz tili", rating: 4 },
      { skill: "Rus tili", rating: 4 },
      { skill: "Word", rating: 4 },
      { skill: "Excel", rating: 3 },
      { skill: "Web Dasturlash", rating: 4 },
      { skill: "Dizayn", rating: 3 },
    ],
    descriptions: [
      // "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      // "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
