'use client';
import { aboutMeResume, awardsData, educationData, experienceData, skillBarData } from '@/data/resumedata';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import SkillBar from '../common/skillbar';
import { Section } from '../common/resumeSection';
import Image from 'next/image';

export default function ResumeSection() {
  return (
    <section className="max-w-6xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg overflow-hidden">
      {/* 🔷 Top Banner */}
      <div className="bg-black text-white p-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-6">
            <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
          <Image
          src="/images/profile.jpeg" 
          alt="My Profile Picture"
          layout="fill"
          objectFit="cover"
          priority
        />
        </div>
          <div>
            <h1 className="text-3xl font-bold">MD AAMIR ANWAR</h1>
            <p className="text-yellow-400">Senior .NET Full Stack Developer</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 text-sm space-y-1">
          <p>
            <FaPhoneAlt className="inline mr-2 text-yellow-400" />
            (+91) - 8759104602
          </p>
          <p>
            <FaMapMarkerAlt className="inline mr-2 text-yellow-400" />
            Kolkata, India
          </p>
          <p>
            <FaEnvelope className="inline mr-2 text-yellow-400" />
            aanwar31@gmail.com
          </p>
          <a className="hover:underline" href="https://www.aamirxdev.com" target="_blank">
            <FaGlobe className="inline mr-2 text-yellow-400" />
            www.aamirxdev.com
          </a>
        </div>
      </div>

      {/* 🔶 Main Resume Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-10">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Education */}
          <Section title="Education" data={educationData} />
          {/* Experience */}
          <Section title="Experience" data={experienceData} />
          {/* Awards */}
          <Section title="Awards" data={awardsData} />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* About Me */}
          <div>
            <h3 className="text-xl font-bold mb-2">About me</h3>
            <div className="space-y-4">
                {aboutMeResume.map((para, index) => (
                  <p key={index}>
                    {para.text}
                    </p>
                ))}
            </div>
          </div>
          {/* Skills with progress bars */}
          <div>
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <SkillBar data={skillBarData} />
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl font-bold mb-2">Interest</h3>
            <div className="flex flex-wrap gap-2">
              {['Photography', 'Reading', 'Painting', 'Bowling', 'Basketball'].map((interest) => (
                <span
                  key={interest}
                  className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Me</h3>
            <div className="flex flex-col gap-1 text-sm">
              <a href="#" className="hover:underline">
                <FaFacebook className="inline mr-2" />
                facebook.com/pdf
              </a>
              <a href="#" className="hover:underline">
                <FaInstagram className="inline mr-2" />
                instagram.com/pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



 
