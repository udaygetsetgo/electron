import * as React from 'react';

interface IProps {
    showDetail: any;
}

class BusConfig extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    showDetail: null,
  };

  public render() {
    const { showDetail } = this.props;
    return (
      <div>
        <div className="bus-list">
          <div className="item" onClick={() => showDetail(1)}>
            Bus 1
          </div>
          <div className="item" onClick={() => showDetail(2)}>
            Bus 2
          </div>
          <div className="item" onClick={() => showDetail(3)}>
            Bus 3
          </div>
        </div>
      </div>
    );
  }
}

export default BusConfig;
