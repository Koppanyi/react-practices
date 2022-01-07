import Button from './Button'

const buttonListWithMap = () => {
    const buttonTexts = ["save", "click", "send", "cancel", "delete"]; // pl user adatok kilistázásához
    // azt akarom, hogy ezek gombokként renderelődjenek:

    return <div>{ buttonTexts.map( (text, i) => <Button text={text} key={i} /> ) }</div>

}

export default buttonListWithMap