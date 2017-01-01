@escape(
<div id='feedback-welcome'>
    <div class='feedback-logo'>{{ trans('remarker.text.title') }}</div>
    <p>{{ trans('remarker.text.description_1') }}</p>
    <p>{{ trans('remarker.text.description_2') }}</p>
    <textarea id='feedback-note-tmp'></textarea>
    <p>{{ trans('remarker.text.note') }}</p>
    <button id='feedback-welcome-next' class='feedback-next-btn feedback-btn-gray'>{{ trans('remarker.text.next') }}</button>
    <div id='feedback-welcome-error'>{{ trans('reamerker.text.enter_description') }}</div>
    <div class='feedback-wizard-close'></div>
</div>
)