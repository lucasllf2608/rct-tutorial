import React, {Component} from 'react'
import Square from './Square'




export default class Board extends Component {
    

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            placarX: null,
            placarO: null
        };

    }

    handleClick(i){
        const squares =this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X':'O';
        this.setState({
            squares : squares,
            xIsNext: !this.state.xIsNext
        });
    }


    resetarPlay(){
        const  Nesquares =  Array(9).fill(null);
        this.setState({squares :Nesquares});
    }

    resetarPlacar(){

        this.setState({
               placarX: 0,
               placarO : 0,
           });
           

    }
    
        
    


    renderSquare(i){
       return  <Square 
                 value={this.state.squares[i]}
                 onClick={()=> this.handleClick(i)}
                />;
    }


    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
 

    render(){

        const winner = this.calculateWinner(this.state.squares);
        let status;
        
        if(winner){

            if(winner === 'X'){
                    this.state.placarX = this.state.placarX + 1;
            }else{
                this.state.placarO= this.state.placarO + 1;
            }

            status = 'Winner '+winner;

            this.resetarPlay();

        }else{
            status = 'Next player:'+(this.state.xIsNext ? 'X':'O' );

        }
        
        
        
        return(
            <div>

                <h1>Play Hash</h1>
                <hr/>

                <div>
                    <h3>Scoreboard</h3>
                    <div>
                        <label>Player X:</label>
                        <h4>{this.state.placarX || 0}</h4>
                    </div>
                    <div>
                        <label>Player 0:</label>
                        <h4>{this.state.placarO || 0}</h4>
                    </div>
                </div>

                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                

                <button className="btn-reset"  onClick={() => this.resetarPlay()}>resetar</button>
                <button className="btn-placar"  onClick={() => this.resetarPlacar()}>resetar placar</button>

            </div>
        )
    }
}