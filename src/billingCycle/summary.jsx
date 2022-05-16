import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='8'>
        <fieldset>
            <legend>Summary</legend>
            <Row>
                <ValueBox cols='10 3' color='green' icon='bank'
                    value={`USD ${credit}`} text='Credits - Total' />

                <ValueBox cols='10 3' color='red' icon='credit-card'
                    value={`USD ${debt}`} text='Debts - Total' />

                <ValueBox cols='10 3' color='blue' icon='money'
                    value={`USD ${credit - debt}`} text='Net amount' />
            </Row>
        </fieldset>
    </Grid>
)