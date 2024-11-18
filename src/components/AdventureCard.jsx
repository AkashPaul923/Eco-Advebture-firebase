

const AdventureCard = ({ adventure }) => {
    // console.log(adventure);
    const { adventureTitle } = adventure
    return (
        <div>
            card { adventureTitle}
        </div>
    );
};

export default AdventureCard;