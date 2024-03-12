class RacingController{

    static getWinner(animalList){
        if (animalList.length === 0) {
            return 'There is no animal!';
        }

        const winner = animalList.reduce((fastestAnimal, currentAnimal) => {
            return currentAnimal.getSpeed() > fastestAnimal.getSpeed() ? currentAnimal : fastestAnimal;
        }, animalList[0]);

        return winner.getWinnerMessage();
    }

}

module.exports = RacingController;
