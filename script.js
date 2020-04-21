// script for index.html
class TableExp extends React.Component{
 constructor(){
  super();
  this.state={tableData:[{id:'',name:'',username:'',email:'',address:'',phone:'',website:'',company:'',}],};
 }
 componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users',{responseType:'json'}).then(response =>{this.setState({ tableData:response.data});});
 }
 render(){
  const{tableData}=this.state;
  return(<ReactTable.default
   data={tableData}
   columns={[
    {Header:'Id',accessor:'id',},
    {Header:'Name',accessor:'name',},
    {Header:'Username',accessor:'username',},
    {Header:'Email',accessor:'email',},
    {Header:'Address',columns:[
     {Header:'Street',accessor:'address.street',},
     {Header:'Suite',accessor:'address.suite',},
     {Header:'City',accessor:'address.city',},
     {Header:'ZIP Code',accessor:'address.zipcode',},
     ],
    },
    {Header:'Phone',accessor:'phone',},
    {Header:'Website',accessor:'website',},
    {Header:'Company',accessor:'company.name',},
   ]}
   defaultPageSize={10}
   className="-striped -highlight"/>
  );
 }
};
ReactDOM.render(<div><TableExp/></div>,document.getElementById("root"));
