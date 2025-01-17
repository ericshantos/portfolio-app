import { SkillItem } from '.';

const SkillConteiner = () => {
    const skillItem = [
        { skill: 'python', content: 'Linguagem de programação' },
        { skill: 'javascript', content: 'Linguagem de programação' },
        { skill: 'react', content: 'Front-end' },
        { skill: 'html', content: 'Front-end' },
        { skill: 'css', content: 'Front-end' },
        { skill: 'flask', content: 'Back-end' },
        { skill: 'express', content: 'Back-end' },
        { skill: 'nodejs', content: 'Ecossistema JS' },
        { skill: 'linux', content: 'Sistema Operacional' },
        { skill: 'postman', content: 'Teste de API' },
        { skill: 'docker', content: 'DevOps' },
        { skill: 'vscode', content: 'IDE' },
        { skill: 'git', content: 'Controle de versão' },
        { skill: 'github', content: 'Controle de versão' },
        { skill: 'raspberrypi', content: 'IoT' },
        { skill: 'sklearn', content: 'Machine Learning' },
        { skill: 'tensorflow', content: 'Machine Learning' },
        { skill: 'sass', content: 'Front-end' },
        { skill: 'markdown', content: 'Documentação de software' },
        { skill: 'mysql', content: 'Banco de dados' },
        { skill: 'aws', content: 'Computação em nuvem' },
        { skill: 'next', content: 'Back-end' },
        { skill: 'opencv', content: 'Visão computacional' },
        { skill: 'pytorch', content: 'Machine learning' },
        { skill:'arduino', content: 'IoT' }
    ];

    return (
        <section className='Skills MainItem' id='Skills'>
            <div className='SkillConteiner'>
                {skillItem.map((item) => (
                    <SkillItem key={item.skill} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SkillConteiner;