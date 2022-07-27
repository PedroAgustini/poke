const InputSearch = ({ placeholder }) => {
    return (
        <div>
        <form action="">
          <input type="text" placeholder={placeholder} className="input-name"/>
          <button type="submit" className="btn-submit">Comenzar</button>
        </form>
        </div>
    );
};

export default InputSearch;