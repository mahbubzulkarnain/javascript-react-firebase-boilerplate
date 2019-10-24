import React, { Fragment } from 'react'
import router from 'next/router'

import { auth } from "../vendors/firebase";

export default (Component: any) => {
  return class extends Component {
    constructor(props: any) {
      super(props);
      this.state = {
        loading: true,
        auth   : false
      }
    }

    componentDidMount(): void {
      auth
        .onAuthStateChanged(async authUser => {
          if (authUser) {
            console.log(await authUser.getIdToken() );
            this.setState({ loading: false, auth: true })
          } else {
            this.setState({ loading: false, auth: false });
            router.replace('/')
          }
        });
    }

    renderContent() {
      const { loading } = this.state;

      if (loading) {
        return <h1>Loading...</h1>
      } else {
        return <Component {...this.props}/>
      }
    }

    render() {
      return (
        <Fragment>
          {this.renderContent()}
        </Fragment>
      );
    }
  };
};

