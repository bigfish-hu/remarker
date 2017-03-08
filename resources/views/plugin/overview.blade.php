@escape(
<div id='feedback-overview'>
    <div class='feedback-logo'>
        {{ trans('remarker.text.title') }}
    </div>
    <div id='feedback-overview-description'>
        <div id='feedback-overview-description-title'>
            <h3>{{ trans('remarker.text.feedback_title') }}</h3>
        </div>
        <div id='feedback-overview-description-text'>
            <h3>{{ trans('remarker.text.feedback_description') }}</h3>
        </div>
        <div id='feedback-overview-description-name'>
            <h3>{{ trans('remarker.text.feedback_name') }} <span style='font-weight:normal'>({{ trans('remarker.text.optional') }})</span></h3>
        </div>
        <div id='feedback-overview-description-email'>
            <h3>{{ trans('remarker.text.feedback_email') }}
                <span style='font-weight:normal'>({{ trans('remarker.text.optional') }})</span>
            </h3>
        </div>
    </div>
    <div id='feedback-overview-screenshot'>
        <h3>{{ trans('remarker.text.feedback_screenshot') }}</h3>
    </div>
    <div class='feedback-buttons'>
        <button id='feedback-submit' class='feedback-submit-btn feedback-btn-blue'>{{ trans('remarker.text.send') }}</button>
        <button id='feedback-overview-back' class='feedback-back-btn feedback-btn-gray'>{{ trans('remarker.text.back') }}</button>
    </div>
    <div id='feedback-overview-error'>{{ trans('remarker.text.feedback_write_description') }}</div>
    <div class='feedback-wizard-close'></div>
</div>
)
