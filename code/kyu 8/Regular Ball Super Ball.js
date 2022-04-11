let Ball = ballType => {
    if (typeof ballType === "string"){
        this.ballType=ballType;
    } else this.ballType="regular";
};


