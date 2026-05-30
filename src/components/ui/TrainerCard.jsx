
const TrainerInfo = ({image, description, trainerName, trainerProgram, index}) => {
    return(
        <div className="card" data-index={index}>
            <img src={image} alt={description} className="trainer-image" />
            <div className="card-content">
                <p>{trainerName}</p>
                <p>{trainerProgram}</p>
            </div>
        </div>
    );
};

export default TrainerInfo;