const SliderDots = ({ key, className, onClick }) => {
    return (
        <span
            key={key}
            className={className}
            onClick={onClick}
        ></span>
    );
};

export default SliderDots;