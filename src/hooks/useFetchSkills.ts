import { useState, useEffect } from 'react';

interface SkillItem {
    id: number;
    name: string;
    skill: string;
    content: string;
    mobile: boolean;
}

const useFetchSkills = () => {
    const [skills, setSkills] = useState<SkillItem[]>([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const apiSkills = process.env.NEXT_PUBLIC_API_SKILLS as string;

            try {
                const response = await fetch(apiSkills);

                if (!response.ok) {
                    throw new Error(`Erro ao buscar habilidades: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                const filteredSkills = data.map((item: SkillItem) => {
                    const { id, ...rest } = item;
                    return rest;
                });

                setSkills(filteredSkills);
            } catch (err) {
                throw new Error(err instanceof Error ? err.message : 'Erro desconhecido');
            }
        };

        fetchSkills();
    }, []);

    return skills;
};

export default useFetchSkills;