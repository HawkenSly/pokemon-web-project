import './badge.css';


export default function TypeBadge({ typing }) {
    let type1 = typing[0].charAt(0).toUpperCase() + typing[0].slice(1);
    let type2 = "";

    const getColor = (color) => {
        return `var(--${color})`
    }

    let typingStyle1 = {
        backgroundColor: getColor(typing[0])
    };

    let typingStyle2;

    const typingBG = [typingStyle1];

    let typeCaps = [type1];

    if (typing.length === 2) {
        type2 = typing[1].charAt(0).toUpperCase() + typing[1].slice(1);
        typingStyle2 = {
            backgroundColor: getColor(typing[1])
        }
        typingBG.push(typingStyle2)
        typeCaps.push(type2)
    };



    

    const typings = typeCaps.map((item, index) => 
        <div className="badge" style={ typingBG[index] } key={index}> 
            {item}
        </div>
        ) 
    return typings;
}