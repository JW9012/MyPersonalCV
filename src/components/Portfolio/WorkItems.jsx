const WorkItems = ({ item }) => {
  return (
    <a
      href={item.url}
      className="work__button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <span>React</span>
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
    </a>
  );
};

export default WorkItems;
