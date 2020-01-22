import * as React from "react";
import BusConfig from "./BusConfig";
import CloseableTabs from "react-closeable-tabs";

interface IState {
  data: any[];
  activeIndex: number;
}

interface IProps {}

class Wrapper extends React.Component<IProps, IState> {
  public showDetail = (id: any) => {
    const currentItems = this.state.data.filter(
      (item: { id: number }) => item.id === id
    );
    if (currentItems.length === 0) {
      this.setState({
        data: this.state.data.concat({
          tab: `Bus${id} Detail`,
          component: <div>Details of Bus {id}</div>,
          id: id,
          closeable: true
        }),
        activeIndex: this.state.data.length
      });
    } else {
      this.setState({ activeIndex: id });
    }
  };

  public closeTab = (id: number, index: number) => {
    this.setState({
      data: this.state.data.filter((item: { id: number }) => item.id !== id),
      activeIndex: index
    });
  };

  public state: IState = {
    data: [
      {
        tab: "Home",
        component: (
          <div>
            <BusConfig showDetail={this.showDetail} />
          </div>
        ),
        id: 0
      }
    ],
    activeIndex: 0
  };

  public render() {
    return (
      <div>
        
        <CloseableTabs
          tabPanelColor="lightgray"
          data={this.state.data}
          onCloseTab={(id: number, newIndex: number) => {
            this.setState({
              data: this.state.data.filter(
                (item: { id: number }) => item.id !== id
              ),
              activeIndex: newIndex
            });
          }}
          activeIndex={this.state.activeIndex}
        />
      </div>
    );
  }
}

export default Wrapper;
