import React from 'react';
import styles from './Resume.module.css';
import educationIcon from '../../../assets/education.svg';
import portfolioIcon from '../../../assets/experiance.svg';
import knowleageIcon from '../../../assets/books.svg';
import skillIcon from '../../../assets/financial.svg';

const Resume = () => {
  const sections = [
    {
      type: 'education',
      icon: educationIcon,
      title: 'Education',
      items: [
        {
          date: '2021-2023',
          title: 'Weiterbildung zur Softwareentwicklerin und Software Testing',
          institution: 'AIT TR IT-Schule, „FullStack Development“',
        },
        {
          date: '2021-2023',
          title: 'Weiterbildung zur Softwareentwicklerin und Software Testing',
          institution: 'AIT TR IT-Schule, „FullStack Development“',
        },
      ],
    },
    {
      type: 'experience',
      icon: portfolioIcon,
      title: 'Experience',
      items: [
        {
          date: '2021-2023',
          title: 'Weiterbildung zur Softwareentwicklerin und Software Testing',
          institution: 'AIT TR IT-Schule, „FullStack Development“',
        },
        {
          date: '2021-2023',
          title: 'Weiterbildung zur Softwareentwicklerin und Software Testing',
          institution: 'AIT TR IT-Schule, „FullStack Development“',
        },
      ],
    },
  ];

  const skills = [
    { name: 'Illustrator', percentage: 85, color: 'red' },
    { name: 'Photoshop', percentage: 90, color: 'blue' },
    { name: 'React', percentage: 75, color: 'orange' },
    { name: 'Node.js', percentage: 80, color: 'pink' },
  ];

  const knowledges = [
    { name: 'Illustrator' },
    { name: 'Illustrator' },
    { name: 'Illustrator' },
    { name: 'Illustrator' },
    { name: 'Illustrator' },
    { name: 'Illustrator' },
  ];

  return (
    <>
      <div className={styles.containerHeader}>
        <h1>Resume</h1>
        <span className={styles.line}></span>
      </div>
      <div className={styles.content}>
        {sections.map((section, index) => (
          <div key={index} className={styles.contentContainer}>
            <div className={styles.contentHeader}>
              <img src={section.icon} alt={`icon-${section.type}`} />
              <h2>{section.title}</h2>
            </div>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className={styles.contentItem}>
                {section.type !== 'knowledges' && (
                  <>
                    <span>{item.date}</span>
                    <h3>{item.title}</h3>
                    <span>{item.institution}</span>
                  </>
                )}
                {section.type === 'knowledges' && <h3>{item.name}</h3>}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.contentHeader}>
            <img src={skillIcon} alt="icon-skills" />
            <h2>Working Skills</h2>
          </div>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.contentSkill}>
                <div className={styles.contentSkillHeader}>
                  <h3>{skill.name}</h3>
                  <span>{skill.percentage}%</span>
                </div>
                <div className={styles.skillProgressContainer}>
                  <div
                    className={styles.skillProgress}
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contentHeader}>
            <img src={knowleageIcon} alt="icon-knowledges" />
            <h2>Knowledges</h2>
          </div>
          <div className={styles.knowledgeItem}>
            {knowledges.map((knowledge, index) => (
              <h3 key={index}>{knowledge.name}</h3>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
