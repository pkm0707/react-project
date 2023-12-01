export function Colorbox({ color }) {
    let styles = {
      fontSize: "20px",
      backgroundColor: color,
      padding: "20px",
      margin: "10px",
      width: "235px"
    };
    return (
      <div style={styles}></div>
    );
  }