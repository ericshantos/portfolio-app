import { useState, useEffect } from 'react';

interface SkillItem {
    id: number;
    name: string;
    skill: string;
    content: string;
    mobile: boolean;
}

/**
 * Custom hook to fetch skills from an API.
 *
 * @returns {SkillItem[]} An array of objects representing skills.
 *
 * @typedef {Object} SkillItem
 * @property {number} id - Unique identifier of the skill.
 * @property {string} name - Name of the skill.
 * @property {string} skill - Category or type of the skill.
 * @property {string} content - Description of the skill.
 * @property {boolean} mobile - Indicates whether the skill is available on mobile devices.
 *
 * @example
 * import useFetchSkills from './useFetchSkills';
 *
 * const MyComponent = () => {
 *   const skills = useFetchSkills();
 *
 *   return (
 *     <ul>
 *       {skills.map((skill, index) => (
 *         <li key={index}>{skill.name}</li>
 *       ))}
 *     </ul>
 *   );
 * };
 */
const useFetchSkills = () => {
    const [skills, setSkills] = useState<Omit<SkillItem, 'id'>[]>([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const apiSkills = process.env.NEXT_PUBLIC_API_SKILLS as string;

            try {
                const response = await fetch(apiSkills);

                if (!response.ok) {
                    throw new Error(`Error fetching skills: ${response.status} ${response.statusText}`);
                }

                const data: SkillItem[] = await response.json();

                // Removing the 'id' property from each skill
                const filteredSkills = data.map(({ id, ...rest }) => rest);

                setSkills(filteredSkills);
            } catch (err) {
                console.error('Failed to fetch skills:', err);
            }
        };

        fetchSkills();
    }, []);

    return skills;
};

export default useFetchSkills;