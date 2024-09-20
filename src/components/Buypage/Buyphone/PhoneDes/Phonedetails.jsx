'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const Phonedetails = () => {
  const router = useParams();
  console.log(router);

  const data = [
    
    {id:"1",
      company: "apple",
     
      position: "iphone11",
      
      workingdays : "Mon to Fri",
      jobDescription: {
        title: "moblie",
        responsibilities: [
         "it good phone"       ]
      }
    },
    {id:"2",
        company: "apple",
     
        position: "iphone11",
        
        workingdays : "Mon to Fri",
        jobDescription: {
          title: " moblie",
          responsibilities: [
           "it good phone"       ]
        }
      },
  
    {
      id:"4",
      company: "apple",
     
      position: "iphone11",
      
      workingdays : "Mon to Fri",
      jobDescription: {
        title: "moblie ",
        responsibilities: [
         "it good phone"       ]
      }
    },
    {
      id:"5",
      company: "apple",
     
      position: "iphone11",
      
      workingdays : "Mon to Fri",
      jobDescription: {
        title: "moblie ",
        responsibilities: [
         "it good phone"       ]
      }
    },
    {
      id:"6",
      company: "apple",
     
      position: "iphone11",
      
      workingdays : "Mon to Fri",
      jobDescription: {
        title: " Description",
        responsibilities: [
         "it good phone"       ]
      }
    },
    

    
  ];


  const jobData = data.filter((item) => item.id === router.Phonedetails)[0];
  

//   if (!jobData) {
//     return <div>Job not found</div>;
//   }

  return (
    <div className="max-w-full px-20 py-10 bg-white border border-gray-300 rounded-lg shadow-lg flex md:flex-row flex-col gap-20">
      <div>
      <h2 className="text-5xl font-semibold mb-14">{jobData.position}</h2>
      
      {jobData.about && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.about.title}</h4>
          <div className="max-w-3xl">
          {jobData.about.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-2 text-justify">{paragraph}</p>
          ))}
          </div>
        </section>
      )}

      {jobData.RoleDescription && (
        <section className="mb-6">
         
          <h4 className="text-2xl font-semibold mb-2">{jobData.RoleDescription.title}</h4>
          <div className="max-w-3xl">
          {jobData.RoleDescription.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-2 text-justify">{paragraph}</p>
          ))}
          </div>
        </section>
      )}

      {jobData.Qualifications && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.Qualifications.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {jobData.Qualifications.content.map((qualification, index) => (
              <li key={index} className="mb-2">{qualification}</li>
            ))}
          </ul>
        </section>
      )}

      {jobData.jobDescription && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.jobDescription.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700 max-w-3xl">
            {jobData.jobDescription.responsibilities.map((responsibility, index) => (
              <li key={index} className="mb-2">{responsibility}</li>
            ))}
          </ul>
        </section>
      )}

      {jobData.SkillsRequired && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.SkillsRequired.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {jobData.SkillsRequired.content.map((skill, index) => (
              <li key={index} className="mb-2">{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {jobData.Benefits && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.Benefits.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {jobData.Benefits.content.map((benefit, index) => (
              <li key={index} className="mb-2">{benefit}</li>
            ))}
          </ul>
        </section>
      )}
      </div>
      <div>
        
       
      </div>

    </div>
  );
};

export default Phonedetails;
