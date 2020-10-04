import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Pagination extends Component {
    state = {}

    render() {
        const {numberOfElements, elementPerPage} = this.props;
        if (numberOfElements > elementPerPage)
            return (<nav>
                <ul className="pagination">
                    {this.renderPagination()}
                </ul>
            </nav>);
        return <Fragment/>;
    }

    change
    renderPagination = () => {
        const renderClass = (page) => {
            let theClass = "page-item";
            if (page === currentPage)
                theClass += " active";
            return theClass;
        }
        const {numberOfElements, elementPerPage, currentPage} = this.props;
        let pages = []
        for (let i = 1; i <= Math.ceil(numberOfElements / elementPerPage); i += 1) {
            pages.push(<li className={renderClass(i)} key={i} onClick={() => this.props.onChangePage(i)}>
                    <span className="page-link clickable">{i}</span>
                </li>
            )
        }
        return (<Fragment>
            {pages}
        </Fragment>);
    }
}
Pagination.propTypes = {
    numberOfElements: PropTypes.number.isRequired,
    elementPerPage: PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
}