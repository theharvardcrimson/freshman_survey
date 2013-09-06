window_width = 0;
aspect_ratio = 309 / 518;

window.onload = function () {
    // var R = Raphael("paper", 300, 300);
    // var attr = {
    //     fill: "#333",
    //     stroke: "#666",
    //     "stroke-width": 1,
    //     "stroke-linejoin": "round"
    // };

    window_width = $('#paper').width();

	var paper = Raphael('paper', '485', '285');

	var us = {};

	var path_l = paper.path("M924.779,80.932l-1.939-2.102l-2.748,0.162l0.484,1.132     l-0.161,0.485h-0.81l-2.909-2.263l-0.161-4.85l-0.81-1.94h-5.98l-9.053-29.907l-1.94-0.97l-5.981-2.425l-1.454-0.162     l-1.778,1.778l-4.041,2.91v0.97l-0.81,0.808l-2.748-0.646l-1.293-2.263v-1.132l-1.294-0.162h-1.293l-2.102,4.203l-2.91,8.892     l-1.778,4.85l0.162,4.85l0.162,1.455l-0.809,2.748l-0.81,0.97v5.981l1.94,2.425l-1.455,4.042l-2.587,4.688l-1.31,4.496v2.587     l-1.514-0.41l-1.387,0.115l-0.017-0.039l-0.896-0.005l-0.646,1.617l-0.646-0.485l-0.97-0.97l-1.455,1.94l-0.048,5.032     l0.017,0.149l-26.419,6.732l0.377-0.112l-7.564,2.071l-4.526,1.455l-3.232-0.162l-5.497,1.293l-3.081,1.246l-2.415,1.826     l-2.102,2.425l-2.748,3.718l-2.91,4.526l-1.455,2.91l-0.646,0.809l-5.82,5.496l0.162,2.587l0.809,1.131l1.778,0.809h1.778v1.455     l-1.132,2.102l0.322,1.455l1.455,2.102l-0.162,2.264l-1.938,1.131h-2.103l-1.616,1.94l-1.778,3.233l-2.103,1.778l-5.173,0.485     l-2.587,1.131l-2.102,1.293l-1.616-0.162l-1.939-1.293l-6.306,0.162l-3.231,0.485l-4.043,1.293l-4.363,1.455l-2.91,1.778     l1.939,6.143l1.777,0.162l1.294,3.072l0.161,0.97l-1.132,0.97l-2.103,2.748l-0.483,1.617l-1.94,1.778l-1.777,1.131l-0.971,1.617     l-1.293,1.131l-1.429,1.125l0.021-0.009l-5.361,5.068l-1.294,0.485l-4.202,3.009l2.911,19.138l2.48,9.729l3.572,19.261     l3.269-0.638l11.944-1.502l1.774,0.37l0.982,4.357l0.971,5.658l0.322-0.324l2.103-2.425l2.264-2.618l2.425-0.615l1.455-1.455     l0.233-0.339l1.466-2.312l4.355,0.323l2.586-2.102l2.007-1.453l1.846-0.485l4.724,3.188l2.364,1.597l4.53,3.059l0.177,2.774     l6.593,1.795l1.232,0.686l1.786,1.754l-0.761,3.962l-1.777,2.587v2.102l0.646,1.778l5.064,1.355l4.311-0.062l3.071,0.97     l2.102,0.323l0.972-2.102l-1.455-2.102v-1.778l-2.425-2.102l-1.718-4.49l3.766,0.176l0.054,0.595l0.484-0.162l0.231-0.397     l2.403,0.112l0.112,0.124l-1.616,1.293l-0.323,3.395l2.587,3.395l3.88,0.485l1.616-0.808l3.236,4.183l1.357,0.536l6.654-2.797     l2.007-4.024l-0.436-4.908l-0.019-0.001l-2.259-7.366l-0.97,0.485l-3.557-2.425l-1.778-4.688l-1.94-3.557l-2.971-2.709     l3.187,2.867l4.851,2.263l4.042,0.646l0.161,1.455l-0.809,0.97l0.323,2.748h0.808l2.103-2.425l0.809-4.85l2.748-4.042     l3.072-6.466l1.131-5.497l-0.646-1.132l-0.161-9.376l-1.617-3.395l-1.132,0.808l-2.748,0.323l-0.484-0.485l1.131-0.97l2.103-1.94     l0.062-1.094l0.008,0.298l1.176,0.533l4.041-1.131l5.819-1.94l2.586-0.97l7.113-5.334l3.88-2.91l3.396-3.557l-4.203-1.616     l-1.293,1.455l-2.91,2.749l-7.921,3.88l-2.265-0.162l-1.615-0.646l-1.133,0.646l-2.263,2.587l-1.455,1.293l-1.294,0.323     l-0.323-1.293l1.94-1.778l-0.797-1.678l0.059-0.089l4.271-3.906l3.556-3.233l1.94-2.102l0.809,0.646l2.748-1.455l5.173-1.132     l7.795-3.179l0.002,0.033l2.909-0.97l2.426-1.94l1.132-1.778l1.294,0.162l5.143-2.579l-0.479-2.276l0.802-1.442l2.91-1.455     l0.808,3.072l-0.484,1.778l-2.425,1.455v0.97l1.939-1.455l3.88-4.526l3.88-1.94l4.203-1.455l-0.323-2.425l-0.97-2.91l-1.94-2.425     l-1.777-0.808l-2.103,0.162l-0.483,0.485l0.97,1.293l1.455-0.809l2.102,1.617l0.81,2.748l-1.778,1.778l-2.264,0.97l-3.558-0.485     l-3.88-5.981l-2.263-2.587h-1.778l-0.654,0.468l-1.186-5.639l1.517-3.235l-2.89-4.413l0.364,2.852l-0.577-2.746l0.869-1.077     l1.019-3.077l0.069,0.167l1.124-6.259l0.161-4.365l1.455-1.293l-0.971-3.233l3.071-3.556l1.617,1.455l1.293-0.485l5.335-3.071     l0.323-2.91l2.91-0.485l1.615-2.586l-0.161-1.617l-0.323-3.072l0.809-1.293l-0.322-1.132l-1.294-1.455l2.103-1.293l1.778,3.233     l1.453-0.323l0.323,1.293v1.617l1.94,0.162l0.484-2.749l0.484-0.646l-1.616-1.455l0.97-1.455l2.426-1.455l0.97-1.455l1.778-0.162     c0,0,0.322,2.102,0.971,2.102c0.646,0,1.293,0,1.293,0l4.85-5.497l3.396-3.071l1.938-0.647l2.103-4.688v-1.94L924.779,80.932z      M826.124,231.993l-0.396-0.958l0.522,1.075L826.124,231.993z");
	path_l.attr({fill: '#D3D3D3',stroke: '#FFFFFF',"stroke-width": '0.75',parent: 'group_a','stroke-opacity': '1'}).data('id', 'path_l');
	var path_v = paper.path("M808.883,262.488l-0.095-0.001l-4.979-1.268l-0.589-1.853   l-0.109-2.059l0.732-0.976l1.214-1.615l0.654-3.648l-1.659-2.056l-2.133-1.176l-5.785-1.299l-0.066-2.938l-4.833-2.96l-0.009-0.104   l-1.938-1.778l-3.645-1.822l-1.304-1.016l-1.846,0.485l-2.007,1.453l-2.586,2.102l-2.91,0.323l-1.445-0.646l-1.778,2.586   l-1.455,1.455l-2.538,0.615l-2.263,3.072l-2.131,2.581l-1.083-6.031l-1.112-4.945l-12.428,1.8l-4.631,0.751l-3.492-19.827   l-1.283,1.293l-0.97,1.455l1.132,3.071v4.688l-0.484,5.012l-0.323,5.658l-2.264,3.88l-3.071,3.395l-2.263,1.617l-2.103-0.485   l-1.294,1.455l-2.263,3.395l-0.972,1.293v2.425l1.133,1.778l-0.484,1.617l-1.778,0.97l-0.484-1.778l-1.293-1.132l-1.294,0.646   l-0.971,3.88l-0.16,5.012l-1.617,1.455l-0.161,2.748l-1.94,0.808l-2.183,0.081l0.042-0.473l-2.644-2.083l-2.043-1.058l-0.646-2.837   l-1.882,0.707l-2.617,1.426l-1.688,2.056l-2.574-0.218l-5.237-0.573l-2.603,1.278l-1.614,0.146l-2.052-2.208l-5.133-0.011   l-2.054-4.365l-3.348-1.429l-2.301,0.746l-4.186,0.118l-0.565,2.995l1.144,1.455l0.198,1.565l-2.443,1.708l-3.791,1.646   l-2.926,0.456l-0.705,4.835l-4.777,3.438l-2.601,3.999l0.367,2.263l-0.588,1.571l-3.317,0.044l-1.529-1.661l-2.146,1.074   l-3.132,1.749l0.161,2.953l-1.173,0.264l-0.411-0.999l-2.205-1.484l-3.187,1.283l-1.591,3.108l-1.528-0.871l-1.393-1.627   l-4.494,0.485l-5.319,0.97l-3.054,1.479c0.016,0.137-1.235,3.621-1.238,3.657l-1.507,0.996l0.646,1.938l0.81,1.779l-1.616,0.646   l-2.587,0.646l-1.939,1.454l-0.322,2.263l1.293,2.426l-0.162,2.264l-1.132,0.323l-3.557-1.294l-2.749-1.293l-2.102,0.646   l-2.263,1.778l-0.803,1.906l1.606,2.539l-0.914,1.828l-0.229,3.201l-2.5,1.541l-1.208,1.32l-0.101-0.004l-1.413,7.072l-1.696,5.479   l-0.172,0.144l0.021-0.06l-3.98,0.718l-5.112-0.635l0.422-1.604l2.979-2.565l0.943-3.655l-1.828-2.974l-78.418,2.517l1.601,6.857   v8.23l1.371,10.974l0.229,37.838l2.286,1.942l2.972-1.371l2.743,1.143l0.681,6.573l-0.104-0.251l0.027,9.573l0.688,9.374   l0.686,3.887l2.516,4.115l0.914,5.028l4.345,5.487l0.229,3.2l0.687,0.687l-0.687,8.459l-2.972,5.029l1.6,2.058l-0.686,2.516   l-0.687,7.315l-1.372,3.2l0.122,3.617l4.688-1.521l12.113,0.206l10.347,3.558l6.467,1.132l3.718-1.455l3.233,1.132l3.232,0.971   l0.809-2.103l-3.233-1.132l-2.586,0.485l-2.748-1.617c0,0,0.161-1.293,0.809-1.455c0.646-0.161,3.071-0.97,3.071-0.97l1.777,1.454   l1.778-0.97l3.232,0.646l1.455,2.425l0.323,2.264l4.526,0.323l1.777,1.778L580,487.106l-1.294,0.809l1.617,1.616l8.405,3.557   l3.558-1.293l0.97-2.425l2.586-0.647l1.778-1.454l1.294,0.971l0.808,2.91l-2.263,0.808l0.646,0.646l3.395-1.293l2.264-3.395   l0.81-0.485l-2.103-0.322l0.809-1.616l-0.161-1.455l2.102-0.485l1.132-1.293l0.646,0.809c0,0-0.162,3.071,0.646,3.071   c0.809,0,4.203,0.646,4.203,0.646l4.042,1.938l0.971,1.455h2.908l1.133,0.971l2.264-3.071v-1.455h-1.293l-3.396-2.748l-5.818-0.809   l-3.233-2.264l1.132-2.748l2.264,0.323l0.162-0.646l-1.778-0.972v-0.483h3.232l1.778-3.072l-1.294-1.939l-0.323-2.747l-1.455,0.16   l-1.938,2.103l-0.646,2.587l-3.07-0.646l-0.972-1.777l1.778-1.94l1.903-3.445l-1.062-2.411l0.062-0.05l1.123,2.488l1.103-0.778   l2.587-4.202l1.778,0.809l6.79-1.94l2.102,0.323l1.455,0.81h5.173l0.037-0.186h2.713l0.646,0.161l1.293-2.748l1.455-4.365   l2.264,0.647l3.071,5.979v0.972l-2.748,1.938l2.748,0.323l5.542-2.572l0.139-0.025l2.729-0.481l0.264-0.093l16.208-3.107   l7.454,1.745l8.083,3.88l1.617,1.455l2.909,1.132l1.616,1.939l0.323,2.749l3.233-1.294h3.88l3.557-1.939l3.718-3.557l3.071,0.161   l0.485-1.131l-0.81-0.972l0.162-1.938l4.041-0.81h2.587l2.91,1.455l4.203,1.455l2.425,3.718l2.748,0.972l1.132,3.395l3.396,1.616   l1.616,2.587l1.939,0.646l5.173,1.294l1.294,3.07l3.071,3.719v9.537l-1.455,4.688l0.323,2.748l1.293,4.85l1.777,4.042l0.81-0.484   l1.455-4.526l-2.587-0.97l-0.323-0.646l1.617-0.646l4.525,0.971l0.161,1.616l-3.231,5.496l-2.103,2.426l3.557,3.718l2.587,3.071   l2.91,5.335l2.909,3.88l2.103,5.012l1.778,0.323l1.615-2.102l1.778,1.132l2.586,4.041l0.647,3.557l3.07,4.365l0.81-1.294   l3.88,0.323l3.556,2.264l3.396,5.173l0.808,3.396l0.324,2.908l1.131,0.971l1.294,0.484l2.425-0.97l1.455-1.617l3.88-0.161   l3.071-1.455l2.748-3.232l-0.485-1.939l-0.323-2.425l0.646-1.939l-0.323-1.939l2.427-1.294l0.322-3.396l-0.646-1.777l-0.484-11.963   l-1.294-7.599l-4.526-8.245l-3.556-5.818l-2.587-5.335l-2.91-2.91l-2.91-7.438l0.81-1.293l1.132-1.294l-1.617-2.909l-4.041-3.719   l-4.85-5.496l-3.719-6.305l-5.334-9.376l-3.73-9.743l-2.208-7.132l-0.771-6.261l2.263-10.022l1.455-4.204l-0.485-2.586l3.335-6.244   l-0.511-1.352l-0.217-0.495l2.102-1.294l5.013-5.496l-0.971-3.233l2.909-0.16l3.557-3.396l1.617-0.809l2.264-3.396l2.748-2.749   l2.102-3.556l2.426-0.647l1.131-2.748l1.617-0.808l0.484-6.306l2.587-6.145l5.421-5.457l-0.001-0.013l5.272-1.292l4.688-0.484   l0.485-2.426l1.938-6.467l3.396-4.688l6.466-5.336l5.174-2.425l2.748-0.646l1.132,0.484h1.293l3.071-4.851l1.94-3.558l-1.295,0.485   l-2.263,2.263l-0.646-1.615h-4.203l1.938-6.305l-0.809-1.295h-1.939v-0.969l-0.322-1.294l1.615,1.294l1.455,0.161l2.425,0.323   l3.72-1.617l1.293-2.909l0.646-2.103l2.587-1.293l0.323-4.203l-0.809-0.646l2.425-0.16l-0.646-2.265l-2.425-2.425l-3.557-6.467   l-2.085-4.917l-0.018,0.032l-3.594-5.989l-1.061,0.308l-4.74,1.378l-1.572-1.495l2.553-1.381l-0.49-2.524l-1.773-1.786   l-0.121-1.412l-2.281-1.543l-0.089-1.615l0.022,0.001l2.671,0.094l0.223-1.385l-1.229-0.79l0.479-1.931l-1.375-1.103l0.439-4.69   l-0.867-1.2l-3.19-0.402l-0.715-3.088l-1.942-0.31l-3.069-0.958L808.883,262.488");
	path_v.attr({fill: '#D3D3D3',stroke: '#FFFFFF',"stroke-width": '0.75',parent: 'group_d','stroke-opacity': '1'}).data('id', 'path_v');
	var path_z = paper.path("M738.368,224.677l0.351-1.19l1.806-1.75l-2.289-9.047     l-2.909-19.362l-6.094,4.054l-3.881,2.263l-3.395,3.718l-4.042,3.88l-3.233,0.808l-2.908,0.485l-5.497,2.587l-2.103,0.162     l-3.395-3.072l-5.174,0.646l-2.587-1.455l-2.381-1.351l-4.893,0.704l-0.007,0.032l0.158-1.423l2.102-3.718l2-1.738l-0.222-5.052     l1.597-1.597l1.091-0.343l0.224-3.557l1.534-3.031l1.052,0.606l0.161,0.646l0.809,0.162l1.939-0.97l-0.322-9.538l-3.233-8.245     l-2.264-9.053l-2.425-3.233l-2.587-1.778l-1.616,1.132l-3.88,1.778l-1.939,5.011l-2.748,3.718l-1.132,0.646l-1.455-0.646     c0,0-2.587-1.455-2.425-2.102c0.161-0.647,0.483-5.012,0.483-5.012l3.396-1.293l0.808-3.395l0.647-2.586l2.425-1.617     l-0.323-10.023l-1.617-2.263l-1.293-0.809l-0.809-2.102l0.809-0.808l1.616,0.323l0.162-1.617l-2.425-2.263l-1.294-2.586h-2.586     l-4.526-1.455l-5.497-3.395h-2.748l-0.646,0.647l-0.971-0.485l-3.071-2.263l-2.909,1.778l-2.91,2.263l0.323,3.557l0.97,0.323     l2.103,0.485l0.484,0.809l-2.587,0.808l-2.586,0.324l-1.455,1.778l-0.323,2.102l0.323,1.617l0.323,5.497l-3.558,2.103     l-0.646-0.162v-4.203l1.293-2.425l0.646-2.425l-0.809-0.808l-1.939,0.808l-0.971,4.204l-2.748,1.131l-1.777,1.94l-0.162,0.97     l0.646,0.809l-0.646,2.586l-2.264,0.485v1.132l0.809,2.425l-1.132,6.143l-1.616,4.042l0.646,4.688l0.485,1.131l-0.809,2.425     l-0.323,0.809l-0.323,2.748l3.557,5.981l2.91,6.466l1.455,4.85l-0.809,4.688l-0.971,5.981l-2.425,5.173l-0.323,2.748     l-3.211,3.039l-2.754,1.574l-2.102,1.94l-1.132,0.323l-1.454-0.97l-3.071-0.89l-0.241,0.194l-0.271-0.921l-0.81-2.587     l-1.293-3.718l-1.615-1.778l-1.455-2.587l-0.233-5.489l0.058-0.008h0.001L615,194.21l-1.18-4.527l-0.646-6.143l-1.132-2.425     l0.97-3.072l0.81-2.91l1.454-2.586l-0.646-3.395l-0.646-3.557l0.485-1.778l1.939-2.425l0.162-2.748l-0.81-1.293l0.646-2.586     l-0.452-4.171l2.748-5.658l2.909-6.79l0.162-2.263l-0.322-0.97l-0.81,0.485l-4.203,6.305l-2.748,4.042l-1.939,1.778l-0.81,2.263     l-1.954,0.808l-1.132,1.94l-1.455-0.323l-0.162-1.778l1.294-2.425l2.103-4.688l1.778-1.617l2.479-5.546l1.683-3.701l0.97-4.042     l1.938-4.365l0.81-0.162l1.132,1.617h0.646l4.526-2.425l1.455,1.617l0.485,0.162l1.293-1.131l1.132-3.072l2.425-0.808     l6.951-0.647l1.939-2.586l5.174-0.162l5.818,1.293h1.778l3.232-1.455l2.265,0.162l2.102-0.647l3.718,0.485l0.81,0.323     l1.293-0.323l-1.293-0.97l-1.293-0.646l-3.233-3.072v-6.951l-1.455-0.485l-1.132,1.131l-6.143,1.617l-1.94,0.485l-2.91-0.808     l-0.483-0.323v-5.658l-1.455-0.162l-2.587,1.293l-4.526,1.94l-6.628,0.323l-3.395,1.131l-4.043,3.557l-1.615,0.97h-1.133     l-1.293,0.808l-1.616-0.485l-1.616-1.293l-1.455,0.97l-3.88,0.161l-2.748-2.748l-1.455-3.071l-1.455-1.132l-3.233-0.97h-2.263     l-1.294-1.293l-3.556,2.91l-0.972,1.132l-0.808-0.485l0.323-2.586l2.425-3.233l0.483-2.425l2.265-0.809l1.455-3.071l3.718-0.97     l0.323-0.97l-1.131-1.132l-4.688,0.485l-4.365,2.425l-2.263,2.263l-1.294,1.778l-1.778,0.808l-1.938,2.91l-0.162,1.293     l-4.364,2.102l-2.425,1.94l-5.981,0.97l-0.646,0.646v0.97l-3.557,2.263l-2.75,0.809l-0.716,0.581l0.203,0.125l-0.973,0.452     l-1.198-0.162l-0.646-1.131l-1.334,0.296l-1.133,0.162l-1.777,0.97l-0.971-0.647l0.646-1.94l1.938-3.071l1.133-1.132     l-1.939-1.455l-2.102,0.808l-2.91,1.94l-7.438,3.233l-2.909,0.646l-2.909-0.485l-0.982-0.878l0.312-0.376l4.328-2.757     l1.293-0.162l4.525-5.011l1.778-0.808l2.264-3.88l2.425-3.557l3.071-2.587l4.775-2.007l9.245-4.061l3.938-1.837l0.611-2.28     l-4.439,0.371l-0.714,1.084h-0.646l-1.778-3.071l-8.892,0.323l-0.971,0.808h-0.97l-0.485-1.293l-0.808-1.778l-2.587,0.485     l-3.233,3.233l-1.615,0.809h-3.072l-2.586-0.97V77.52l-1.293-0.162l-0.485,0.485L543.6,76.55l-0.484-2.91l-1.455,0.485     l-0.484,0.97l-2.425-0.485l-5.335-2.425l-3.881-2.587h-2.909l-1.293-0.97l-2.264,0.646l-1.132,1.132l-0.323,1.293h-4.85v-2.102     l-6.305-0.323l-0.324-1.455h-4.851l-1.615-1.617l-1.455-6.143l-0.81-5.497l-1.938-0.808l-2.264-0.485l-0.646,0.162l-0.323,8.245     l-30.133-0.035l-0.111,0.005l-28.643-0.564l-18.591-0.646l-26.514-1.293l-22.945-2.134l-6.993,67.177l-0.082-0.018l-5.325,63.691     l0.009-0.064l-4.344,44.01l32.318,2.92l-1.072,21.328l0.072,0.161l-3.895,64.595l24.63,1.258l44.558,2.058l46.09,0.458     l12.618-0.204l0.114,0.386l0.229,4.686l0.457,5.385l22.434-0.867l23.206-0.686l20.806-0.803l11.653-0.229l2.17,3.426     l-0.685,3.307l-3.087,2.404l-0.573,1.836l5.379,0.459l3.896-0.688l1.718-5.493l0.651-5.856l2.098-2.556l2.597-1.487l0.052-3.049     l1.017-1.938l-1.663-2.496l0,0l0.908-2.074l2.213-1.748l2.131-0.613l2.604,1.18l3.628,1.376l1.188-0.3l0.2-2.258l-1.287-2.412     l0.305-2.377l1.839-1.348l3.021-0.811l1.261-0.457l-0.612-1.389l-0.791-2.354l1.433-0.98l1.157-3.215l0.031-3.229h0.062     l-0.064,2.856l2.909-1.551l5.594-0.97l4.464-0.485l1.455,1.599l1.438,0.81l1.552-3.006l3.25-1.341l2.167,1.503l0.469,1.019     l1.193-0.258l-0.162-3.055l2.685-1.503l2.493-1.262l1.585,1.617h3.327l0.58-1.535l-0.322-2.376l2.796-4.01l4.575-3.312     l0.599-4.867l3.202-0.55l3.539-1.551l2.521-1.6l-0.097-1.373l-1.228-1.795l0.37-2.263l0.056-0.65l4.122-0.129l2.425-0.808     l3.364,1.503l2.069,4.365l5.14-0.018l1.893,2.119l1.761-0.065l2.538-1.341l2.505,0.372l5.421,0.482l1.728-2.133l2.346-1.293     l2.071-0.681l0.646,2.749l1.778,0.97l3.477,2.344l2.183-0.081l1.333-0.493l0.185-2.761l1.585-1.455l0.101-4.792l1.022-4.109     l1.301-0.602l1.32,1.148l0.538,1.697l1.719-1.038l0.439-1.46l-1.117-1.903l0.066-2.314l0.749-1.072l2.152-3.306l1.051-1.543     l2.102,0.485l2.264-1.617l3.071-3.395l2.771-4.079l0.319-5.055l0.485-5.012l-0.178-5.307L738.368,224.677z M598.983,321.059     l-0.053-0.057l0.812-0.505L598.983,321.059z");
	path_z.attr({fill: '#D3D3D3',stroke: '#FFFFFF',"stroke-width": '0.75',parent: 'group_e','stroke-opacity': '1'}).data('id', 'path_z');
	var path_ab = paper.path("M530.698,448.258l-0.746-0.786l-0.196-3.146l-4.216-5.538     l-0.898-4.95l-2.675-4.42l-0.702-3.605l-0.687-9.532l0.04-9.703l-0.563-6.105l-2.69-1.139l-3.043,1.327l-2.427-1.979l0.533,0.308     l-0.389-37.217l-1.372-10.976l-0.161-8.872l-1.438-6.538l-0.778-7.18l-0.068-3.815l-12.137,0.318l-46.41-0.457l-45.038-2.059     l-24.292-1.371l-16.684-1.272l0.009-0.13l-104.004-10.637l-0.187,1.287l-83.711-11.914l-3.092,16.412l-1.606,0.017l-1.714,2.629     l-2.515-0.112l-1.257-2.744l-2.743-0.344l-0.915-1.144h-0.915l-0.915,0.571l-1.943,1.028l-0.114,6.974l-0.229,1.715     l-0.572,12.574l-1.486,2.172l-0.572,3.314l2.744,4.916l1.257,5.829l0.8,1.028l1.029,0.572l-0.114,2.285l-1.601,1.372     l-3.429,1.716l-1.943,1.942l-1.486,3.657l-0.572,4.915l-2.858,2.743l-2.058,0.687l0.136,0.83l-0.457,1.715l0.457,0.8l3.658,0.571     l-0.572,2.744l-1.486,2.172l-3.772,0.914l-2.627,2.157l-0.323,1.455l0.485,0.972l18.915,10.669l12.125,7.599l14.711,8.567     l16.812,10.023l12.286,2.425l24.875,2.696l-0.003,0.024l15.46,1.989l1.293-10.023l29.232,2.829l0.227-0.026l1.71,0.428     l2.586,2.91l1.455,4.364l4.688,2.264l1.293,3.232l7.113,7.922l1.293,1.616l5.013,2.103l1.132,2.102l1.616,0.97l0.484,2.748     l3.232,6.467v8.083l2.264,4.688l7.438,7.76l5.173,2.103l1.778,1.938v0.646l3.88,2.264l1.938,0.646l1.778,1.132l2.587,0.97     l2.425-2.425l4.365-6.144l0.97-3.719l2.265-3.233l3.556-1.454l4.527-1.778l3.07,2.264l7.438,0.646l6.789,1.132l2.587,2.102v1.132     l2.587,3.071l5.98,5.335l0.161,1.455l1.778,1.939l0.809,4.203l5.335,12.285l-0.161,1.94l4.202,2.586l3.558,6.629l3.395,4.364     l3.233,1.293l1.617,2.264l-1.294,4.365l0.646,0.97l1.294,0.646l-0.323,3.395l-0.646,0.647l0.646,2.263l3.232,1.94l1.294,6.466     l2.102,3.88l7.599,3.396l5.174,1.132l4.203,3.071l3.231,0.646l1.294-0.485l5.496,1.132l5.658,3.881l3.071-1.94l0.971-1.454     l-1.777-2.749l-0.972-6.143l-1.777-6.951l-0.809-2.426l0.809-4.526l1.132-3.88l1.294-4.526l1.454-5.496l-2.264-1.939l0.971-1.939     l4.042-0.322l3.88-5.497l3.395-0.646l5.819-3.557l1.778-1.454l6.305-3.396l5.658-2.425l5.335-3.233l2.748-2.102l5.657-5.335     l1.294-0.808l2.103-1.455l2.586-1.94l0.97-1.938l9.861-4.526l5.665-1.585l-0.295-3.503l1.505-3.338l0.669-7.404l0.631-2.338     l-1.533-2.153l2.872-5.006L530.698,448.258z M510.391,397.879l0.097-0.012l1.282,0.739L510.391,397.879z");
	path_ab.attr({fill: '#D3D3D3',stroke: '#FFFFFF',"stroke-width": '0.75',parent: 'group_h','stroke-opacity': '1'}).data('id', 'path_ab');
	var path_ac = paper.path("M 384.936,234.64 352.815,231.862 360.377,143.276    360.407,143.269 369.21,56.969 338.535,54.161 309.274,50.605 280.014,46.563 247.682,41.229 229.253,37.833 196.529,30.901    196.459,30.896 187.541,29.228 187.541,29.228 167.708,25.071 144.751,19.413 124.706,13.755 116.138,11.815 106.438,9.067    102.073,7.612 100.941,8.42 100.618,9.229 103.043,14.078 104.175,16.665 102.396,20.221 102.396,22.484 103.043,23.939    102.235,25.718 102.72,28.951 103.69,30.244 103.528,31.538 102.073,31.699 101.427,29.759 100.295,27.334 98.517,25.879    98.84,23.778 101.104,23.293 100.78,21.515 100.457,20.383 98.355,21.676 97.062,22.808 97.062,25.233 94.798,25.395    91.404,24.424 88.494,22.97 85.422,22.323 80.896,20.221 77.663,18.281 74.914,15.695 72.489,12.785 70.388,12.3 68.125,21.676    69.903,24.909 69.903,32.831 69.256,35.741 70.711,42.854 73.459,45.602 69.095,46.249 68.933,49.967 71.52,51.099 69.903,55.14    67.155,55.463 66.831,58.373 66.083,64.479 66.083,64.479 64.533,68.909 61.3,78.932 58.066,85.398 53.055,99.463 46.589,113.042    38.506,125.652 36.566,128.562 35.757,137.13 36.052,146.354 34.573,153.947 34.411,161.384 29.238,173.185 26.167,175.771    25.843,176.903 24.065,177.711 22.61,181.915 21.802,185.148 24.55,189.351 26.167,193.554 27.298,197.111 26.975,203.577    25.197,206.649 24.55,212.469 23.58,216.187 25.358,220.066 28.106,224.593 30.37,229.443 31.663,233.484 31.34,236.718    31.017,237.203 31.017,239.304 36.675,245.609 36.189,248.034 35.543,250.297 34.896,252.237 35.058,260.481 37.16,264.2    39.1,266.787 41.848,267.271 42.818,270.02 41.686,273.576 39.584,275.193 38.453,275.193 37.645,279.073 38.129,281.982    41.363,286.347 42.979,291.682 44.435,296.37 45.728,299.441 49.123,305.262 50.578,307.848 51.062,310.758 52.679,311.729    52.679,314.152 51.871,316.093 50.092,323.206 49.607,325.146 52.032,327.895 56.235,328.379 60.762,330.157 64.642,332.259    67.552,332.259 70.461,335.33 73.048,340.18 74.18,342.443 78.06,344.545 82.91,345.354 84.364,347.455 85.011,350.688    83.556,351.335 83.879,352.305 87.113,353.113 89.861,353.275 93.021,351.588 96.901,355.791 97.709,358.055 100.295,362.258    100.619,365.49 100.619,374.867 101.104,376.646 111.127,378.1 130.849,380.85 144.694,382.198 148.634,381.709 150.121,379.698    150.665,376.757 147.114,376.167 146.6,375.498 147.077,373.467 146.917,372.877 148.84,372.257 151.883,369.424 152.464,364.43    153.844,361.027 155.788,358.861 159.307,357.271 160.961,355.666 161.03,353.559 160.036,352.979 159.013,351.904    157.858,346.057 155.173,341.227 155.737,337.729 155.83,337.77 157.277,335.682 157.626,327.088 157.988,321.311 158.298,314.525    161.077,312.881 162.115,312.936 162.885,314.043 165.504,314.421 166.976,317.164 169.349,317.154 170.921,314.748    172.754,314.398 175.75,298.232 259.499,310.105 259.333,309.936 380.032,320.965   z");
	path_ac.attr({fill: '#D3D3D3',stroke: '#FFFFFF',"stroke-width": '0.75',parent: 'group_k','stroke-opacity': '1'}).data('id', 'path_ac');

	us.west = path_ac;
	us.southwest = path_z;
	us.midwest = path_ab;
	us.northeast = path_l;
	us.southeast = path_v;

    resize_regions(us);
	for (elt in us) {
		$("#"+elt).hide();
	}

    var current = null;
    for (var state in us) {
        us[state].color = Raphael.getColor();
        (function (st, state) {
            st[0].style.cursor = "pointer";
            st[0].onmouseover = function () {
                current && us[current].animate({fill: "#d3d3d3", stroke: "#fff"}, 500) && $("#"+current).hide();
                st.animate({fill: st.color, stroke: "#ccc"}, 500);
                st.toFront();
                paper.safari();
                $("#"+state).show();
                current = state;
            };
            st[0].onmouseout = function () {
                st.animate({fill: "#d3d3d3", stroke: "#fff"}, 500);
                st.toFront();
                $("#"+state).hide();
                paper.safari();
            };
        })(us[state], state);
    }

    $(window).on('debouncedresize', function() {
        resize_regions(us);
    });
};

function resize_regions(us) {
        var old_width = 950;
        var new_width = $('#paper').width();
        var ratio = new_width / old_width; 
        $('#paper svg').attr({
            'width': new_width,
            'height': new_width * aspect_ratio
        });
        for (var elt in us) {
            var t = "s" + ratio + "," + ratio + ",0,0";
            us[elt].transform(t);
        }
    
}