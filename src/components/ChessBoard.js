import React, { Component } from "react";
import { connect } from "react-redux";

import Square from "./Square";
import PieceContainer from "./PieceContainer";
import { subscribeMessage } from "../api";
import { calculMoves, updatePiece } from "../redux/actions/pieceActions";

class ChessBoard extends Component {
  constructor(props) {
    super(props);

    const { board, pieces } = props;

    this.state = {
      x: 0,
      y: 0,
      chessIsMount: false,
    };

    this.boardRef = React.createRef();
  }

  onMouseMove = (e) => {
    // e.stopPropagation();
    // const mouseXPosition = e.clientX - this.boardRef.current.offsetLeft;
    // const mouseYPosition = e.clientY - this.boardRef.current.offsetTop;
    // this.setState({ x: mouseXPosition, y: mouseYPosition });
  };

  componentDidMount() {
    subscribeMessage((message) => console.log("message", message));

    const { calculMoves, board, updatePiece } = this.props;
    calculMoves();
    this.setState({
      chessIsMount: true,
    });
  }
  componentDidUpdate() {}

  render() {
    const { board, pieces, game } = this.props;
    const { chessIsMount } = this.state;
    const sizeBoard = 600;

    console.log("this.props CHESSBPOARD ", this.props);
    const styles = {
      width: sizeBoard + "px",
      height: sizeBoard + "px",
    };

    return (
      <div
        style={styles}
        onMouseMove={this.onMouseMove}
        className="chessBoard"
        ref={this.boardRef}
      >
        {board.map((el) => (
          <Square key={el.squareName} data={el}></Square>
        ))}

        {game.playerWinner && <div>PLAYER {game.playerWinner} WINS!!!</div>}

        {chessIsMount &&
          pieces.map((el) => (
            <PieceContainer
              refParent={this.boardRef}
              key={el.name}
              data={el}
            ></PieceContainer>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    pieces: state.pieces,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calculMoves: () => dispatch(calculMoves()),
    updatePiece: (pieceName, newPosition) =>
      dispatch(updatePiece(pieceName, newPosition)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChessBoard);
