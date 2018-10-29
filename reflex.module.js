import { Slim } from "slim-js";

export class Component{
    constructor(props){
        this.props = {}
        this._props = {}
        this.$methods = {}
        Object.assign(this.props,props)
        Object.assign(this._props,props)
        this.template = this.render(props)
    }

    _render(p){
        var self = this;
        // var template = Template7.compile(this.render().replace("<=children=>",this.c));
        return class extends Slim {
            constructor(){
                super();
            }
            onBeforeCreated(){
                this.props = p;
                this.methods = self.methods();
            }
        }
    }

    methods(){return {}}

    render(){}
}