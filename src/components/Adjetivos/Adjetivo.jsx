export default function Adjetivo({ icon, title, text }) {
	return (
		<div className="adjetivos-objetos">
			<span className="material-icons adjetivos-objetos_icon"> {icon} </span>
			<div>
				<h5 className="adjetivos-objetos_title">{title}</h5>
				<h6>{text}</h6>
			</div>
		</div>
	);
}
