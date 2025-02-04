import { SkillItem, useApp } from '.';

interface SkillItem {
    skill: string;
    content: string;
    mobile: boolean;
}

const SkillConteiner = () => {

    const { isMobile } = useApp();
    
    const skillItem : SkillItem[] = [
        { skill: 'python', content: 'Linguagem de programação', mobile: true },
        { skill: 'javascript', content: 'Linguagem de programação', mobile: true },
        { skill: 'typescript', content: 'Linguagem de programação', mobile: true },
        { skill: 'react', content: 'Front-end', mobile: true },
        { skill: 'html', content: 'Front-end', mobile: false },
        { skill: 'css', content: 'Front-end', mobile: false },
        { skill: 'flask', content: 'Back-end', mobile: true },
        { skill: 'express', content: 'Back-end', mobile: true },
        { skill: 'nodejs', content: 'Ecossistema JS', mobile: true },
        { skill: 'linux', content: 'Sistema Operacional', mobile: true },
        { skill: 'postman', content: 'Teste de API', mobile: false },
        { skill: 'docker', content: 'DevOps', mobile: false },
        { skill: 'vscode', content: 'IDE', mobile: true },
        { skill: 'git', content: 'Controle de versão', mobile: true },
        { skill: 'github', content: 'Controle de versão', mobile: false },
        { skill: 'sklearn', content: 'Machine Learning', mobile: true },
        { skill: 'tensorflow', content: 'Machine Learning', mobile: false },
        { skill: 'sass', content: 'Front-end', mobile: true },
        { skill: 'markdown', content: 'Documentação de software', mobile: false },
        { skill: 'mysql', content: 'Banco de dados', mobile: true },
        { skill: 'aws', content: 'Computação em nuvem', mobile: true },
        { skill: 'next', content: 'Back-end', mobile: false },
        { skill: 'opencv', content: 'Visão computacional', mobile: false },
        { skill: 'pytorch', content: 'Machine learning', mobile: true },
        { skill:'arduino', content: 'IoT', mobile: false }
    ];

    const validSkillItems = skillItem.filter(item => item.content && item.skill);

    return (
        <section className='Skills MainItem' id='Skills'>
            <div className='SkillConteiner'>
                {validSkillItems.map((item) => (
                    isMobile && !item.mobile ? null : <SkillItem key={item.skill} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SkillConteiner;