import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }
    // async代表异步，await代表等待，等待后面表达式的结果
    async componentDidMount() {{/*等待importComponent这个异步方法执行并返回结果后，才继续下面的代码*/}
      const { default: component } = await importComponent();{/*await importComponent()代表阻塞阻挡*/}
      alert(component);
      this.setState({component});
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}