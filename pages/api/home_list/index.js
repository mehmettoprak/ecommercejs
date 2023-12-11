
import HomeList from "../../../home_list.json"

export default function handler (req, res){

    res.status(200).json(HomeList);
}