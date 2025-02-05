import { SkillItem, useApp, useFetchSkills } from '.';

interface SkillItem {
    name: string;
    content: string;
    mobile: boolean;
}

const SkillConteiner = () => {

    const { isMobile } = useApp();
    
    const skillItem : SkillItem[] = useFetchSkills();

    const validSkillItems = skillItem.filter(item => item.content && item.name);

    return (
        <section className='Skills MainItem' id='Skills'>
            <div className='SkillConteiner'>
                {validSkillItems.map((item) => (
                    isMobile && !item.mobile ? null : <SkillItem key={item.name} item={item} />
                ))}
            </div>
        </section>
    );
};

export default SkillConteiner;