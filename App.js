import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header'
import StartGameScreen from './screens/startGameScreen'
import GameScreen from './screens/gameScreen'
import gameOverScreen from "./screens/gameOverScreen"
import GameOverScreen from './screens/gameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  const configureNewGameHandler = () => {
    setGuessRound(0); 
    setUserNumber(null);
  }
  const gameOverHandler = (numOfRounds) => {
    setGuessRound(numOfRounds);
  } 
  let content = <StartGameScreen onStartGame={startGameHandler}/>
  if (userNumber && guessRound <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }
  else if(guessRound>0){
    content = <GameOverScreen roundNumber={guessRound} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
    {content} 
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  flex:1
} 
});
