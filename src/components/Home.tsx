import React, {FC} from 'react';
import { Card } from '@uifabric/react-cards';
import {
		Text,
		DefaultButton
  } from 'office-ui-fabric-react';
import { Link } from 'react-router-dom';

const Home: FC<{}> =() => {
	const _alertClicked = () => {
		alert("clicked");
	}

		return (
			<div className="HomeElement">
			<Card className="HomeCard">
					<Card.Item>
					<Text className="HomeText">Chuck a luck</Text>
					<Link to={"/game"}>
						<DefaultButton text="Start Game" onClick={_alertClicked} allowDisabledFocus disabled={false}  />
						</Link>
					<DefaultButton text="Show Results" onClick={_alertClicked} allowDisabledFocus disabled={false}  />
					</Card.Item>
			</Card>
	</div>
		)
}

export default Home;