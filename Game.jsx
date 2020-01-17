import React, {Component} from 'react'
import Board from './Board'
import '../style/game.css'

 
export default class Game extends Component {
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


/*
Oleo do Motor
Oleo do Filtro
Filtro de Ar
Filtro do Combustivel
FIltro do Ar condicionado
ALinhamento
Balanceamento
Velas de ingnição
Correa dentada
Pastilha de freio : 200,00
Disco de Freio : 350,00
Fluido do freio
Correia poly V esticador


co








*/