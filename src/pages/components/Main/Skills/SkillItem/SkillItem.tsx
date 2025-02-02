interface SkillItemProps {
    item: {
        skill: string;
        content: string;
    }
}

const SkillItem : React.FC<SkillItemProps> = ({ item }) => {
    
    if (!item || !item.content) {
        return null;
    }

    return (
        <div className="SkillItem">
            <h1>{item.content}</h1>
            <img
                src={`https://skillicons.dev/icons?i=${item.skill}`}
                alt={item.skill}
            />
        </div>
    );
};

export default SkillItem;
